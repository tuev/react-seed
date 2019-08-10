import React from 'react'
import sliderData from './slider.json'

const SliderCustomPaging = index => (
  <div className='slider-custom-paging__image'>
    {sliderData[index] && <img src={sliderData[index].image || ''} alt='' />}
  </div>
)

export default SliderCustomPaging
