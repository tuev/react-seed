import React, { useContext, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { get } from 'lodash'
import { SliderContext } from './Slider'

const SliderCustomPaging = ({ index }) => {
  const sliderRef = useContext(SliderContext)
  const sliderItems = useSelector(state => get(state, 'eventSlider.items', []))
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
        backgroundImage: `url(${sliderItems[index].image || ''})`
      }}
      onMouseEnter={_slickToGo}
      onClick={_slickToGo}
    />
  )
}

export default SliderCustomPaging
