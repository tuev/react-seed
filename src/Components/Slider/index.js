import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { toggleSliderPlay, initSlider } from 'Redux/Slider/slider.action'
import SliderConfig from './SliderConfig'
import SliderItem from './SliderItem'
import './slider.scss'

const Sliders = ({ data, togglePlay, isPlay, initSlider }) => {
  const renderSliderItem = data
    .filter(item => item && item.image)
    .map((item, idx) => <SliderItem key={idx} {...item} />)

  return (
    <div className='slider position-relative'>
      <Slider ref={slider => initSlider(slider)} {...SliderConfig}>
        {renderSliderItem}
      </Slider>
      <div
        className='slider-button d-flex justify-content-center align-items-center'
        onClick={() => togglePlay()}
      >
        <FontAwesomeIcon icon={isPlay ? faPauseCircle : faPlayCircle} />
      </div>
    </div>
  )
}

const mapStoretoProps = state => {
  const { sliderData } = state
  const { data, isPlay, slider, sliderSpeed } = sliderData
  return { data, isPlay, slider, sliderSpeed }
}

const mapDispacthToProps = dispatch => ({
  togglePlay: isPlay => dispatch(toggleSliderPlay(isPlay)),
  initSlider: slider => dispatch(initSlider(slider))
})

export default connect(
  mapStoretoProps,
  mapDispacthToProps
)(Sliders)
