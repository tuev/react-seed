import React from 'react'
import sliderData from './slider.json'

const SliderCustomPaging = index => {
  const image = sliderData
    .map(item => item.image)
    .filter((item, idx) => idx === index)

  return (
    <div className='slider-custom-paging__image'>
      <img src={image || ''} alt='' />
    </div>
  )
}

export default SliderCustomPaging
