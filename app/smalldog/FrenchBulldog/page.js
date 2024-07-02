import React from 'react'
import VerticalSlideshow from './VerticalSlideshow'
import DogInfo from './DogInfo'
import DynamicInfo from './DynamicInfo'

const breed1 = () => {
  return (
    <>
    <div className='mt-16 flex '>
      <VerticalSlideshow />
      <DogInfo/>
    </div>
    <DynamicInfo/>
    </>
  )
}

export default breed1