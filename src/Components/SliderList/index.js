import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import sliderData from './slider.json'
import SliderItem from '../SliderItem'

export default class SliderList extends Component {
  render () {
    console.log(sliderData)
    const settings = {
      arrows: false,
      dots: false,
      pauseOnHover: false,
      infinite: true,
      speed: 3000,
      autoplay: true,
      fade: true,
      variableWidth: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <Container>
        <div>
          <Slider {...settings}>
            { sliderData.map((item, idx) => <SliderItem key={idx} {...item} />)}
          </Slider>
        </div>
      </Container>

    )
  }
}
