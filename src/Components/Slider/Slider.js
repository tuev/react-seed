import React, { useMemo } from 'react'
import Slider from 'react-slick'
import { merge, isEmpty } from 'lodash'

import { Container } from 'reactstrap'
import SliderItem from './SliderItem'
import defaultConfig from './config'

const AppSlider = ({ title = '', items = [], config = {} } = {}) => {
  const sliderItems = useMemo(() => items, [items])
  const sliderConfig = useMemo(() => merge(defaultConfig, config), [config])
  return !isEmpty(sliderItems) ? (
    <div className='slider-event'>
      <Container>
        <h2 className='slider-event__title'>{title}</h2>
        <Slider {...sliderConfig}>
          {sliderItems.map((item = {}, idx) => (
            <SliderItem key={item._id} {...item} />
          ))}
        </Slider>
      </Container>
    </div>
  ) : (
    <div />
  )
}

export default AppSlider
