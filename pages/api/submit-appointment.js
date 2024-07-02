// pages/api/submit-appointment.js
import connectToDatabase from '../../lib/mongoose';
import Appointment from '../../models/Appointment';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  if (method === 'POST') {
    const { name, email, phone, date, time } = req.body;

    try {
      // Check if there's already an appointment for the same date and time
      const existingAppointment = await Appointment.findOne({ date, time });

      if (existingAppointment) {
        return res.status(400).json({ success: false, message: 'This time slot is already booked. Please choose another time with atleast 2-hours gap.' });
      }

      // Create a new appointment
      const appointment = new Appointment({ name, email, phone, date, time });
      await appointment.save();

      res.status(201).json({ success: true, data: appointment });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
