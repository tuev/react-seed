import React from 'react'
import sliderData from './slider.json'

const SliderCustomPaging = index => (
  <div
    className='slider-custom-paging__image'
    style={{
      backgroundImage: `url(${sliderData[index].image || ''})`
    }}
  />
)

export default SliderCustomPaging
