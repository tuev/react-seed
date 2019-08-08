import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import SliderConfig from './SliderConfig'
import sliderData from './slider.json'
import SliderItem from './SliderItem'
import './slider.scss'

const Sliders = () => {
  //    autoplay: isPlay,
  const [isPlay, _setPlay] = useState(true)
  const _buttonPlay = () => _setPlay(!isPlay)
  const _autoplay = {
    autoplay: isPlay
  }

  return (
    <div className='slider position-relative'>
      <Slider {...SliderConfig} {..._autoplay}>
        {sliderData.map((item, idx) => (
          <SliderItem key={idx} {...item} />
        ))}
      </Slider>
      <div
        className='slider-button d-flex justify-content-center align-items-center'
        onClick={_buttonPlay}
      >
        <FontAwesomeIcon icon={faPauseCircle} />
      </div>
    </div>
  )
}

export default Sliders
