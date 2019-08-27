import React, { useContext, useCallback } from 'react'
import sliderData from './slider.json'
import { SliderContext } from './Slider'

const SliderCustomPaging = ({ index }) => {
  const sliderRef = useContext(SliderContext)
  const _slickToGo = useCallback(
    () => {
      const slider = sliderRef.current
      slider.slickGoTo(index)
    },
    [index, sliderRef]
  )
  return (
    <div
      className='slider-custom-paging__image'
      style={{
        backgroundImage: `url(${sliderData[index].image || ''})`
      }}
      onMouseEnter={_slickToGo}
      onClick={_slickToGo}
    />
  )
}

export default SliderCustomPaging
