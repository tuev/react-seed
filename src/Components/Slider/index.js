import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import SliderConfig from './SliderConfig'
import sliderData from './slider.json'
import SliderItem from './SliderItem'
import './slider.scss'

export default class Sliders extends Component {
  constructor (props) {
    super(props)
    this.state = { isPlay: true }
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this._togglePlay = this._togglePlay.bind(this)
  }

  play () {
    this.slider.slickPlay()
  }

  pause () {
    this.slider.slickPause()
  }

  _togglePlay = () => {
    this.state.isPlay ? this.pause() : this.play()

    this.setState(state => {
      return { isPlay: !state.isPlay }
    })
  };

  render () {
    const renderSliderItem = sliderData
      .filter(item => item && item.image)
      .map((item, idx) => <SliderItem key={idx} {...item} />)

    return (
      <div className='slider position-relative'>
        <Slider ref={slider => (this.slider = slider)} {...SliderConfig}>
          {renderSliderItem}
        </Slider>
        <div
          className='slider-button d-flex justify-content-center align-items-center'
          onClick={this._togglePlay}
        >
          <FontAwesomeIcon
            icon={this.state.isPlay ? faPauseCircle : faPlayCircle}
          />
        </div>
      </div>
    )
  }
}
