import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { toggleSliderPlay, initSlider } from 'Redux/Slider/slider.action'
import SliderConfig from './SliderConfig'
// import sliderData from './slider.json'
import SliderItem from './SliderItem'
import './slider.scss'

class Sliders extends Component {
  // state = { isPlay: true }

  // play = () => {
  //   this.slider.slickPlay()
  // }

  // pause = () => {
  //   this.slider.slickPause()
  // }

  // _togglePlay = () => {
  //   this.state.isPlay ? this.pause() : this.play()

  //   this.setState(state => {
  //     return { isPlay: !state.isPlay }
  //   })
  // }

  _slickToGo = index => this.slider.slickGoTo(index)

  render () {
    const { imageData, togglePlay, isPlay, initSlider } = this.props

    const renderSliderItem = imageData
      .filter(item => item && item.image)
      .map((item, idx) => <SliderItem key={idx} {...item} />)

    return (
      <div className='slider position-relative'>
        <Slider
          ref={initSlider}
          {...SliderConfig({ slickGoto: this._slickToGo })}
        >
          {renderSliderItem}
        </Slider>
        <div
          className='slider-button d-flex justify-content-center align-items-center'
          onClick={togglePlay}
        >
          <FontAwesomeIcon icon={isPlay ? faPauseCircle : faPlayCircle} />
        </div>
      </div>
    )
  }
}

const mapStoretoProps = state => {
  const { sliderData } = state
  const { data: imageData, isPlay, slider } = sliderData
  return { imageData, isPlay, slider }
}

const mapDispacthToProps = dispatch => ({
  togglePlay: isPlay => dispatch(toggleSliderPlay(isPlay)),
  initSlider: slider => dispatch(initSlider(slider))
})

export default connect(
  mapStoretoProps,
  mapDispacthToProps
)(Sliders)
