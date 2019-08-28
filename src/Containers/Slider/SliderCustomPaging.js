import React, { useContext, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { get, uniqBy } from 'lodash'
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
  const items = useMemo(() => uniqBy(sliderItems, 'banner'), [sliderItems])
  return (
    <div
      className='slider-custom-paging__image'
      style={{
        backgroundImage: `url(${items[index].banner || ''})`
      }}
      onMouseEnter={_slickToGo}
      onClick={_slickToGo}
    />
  )
}

export default SliderCustomPaging
