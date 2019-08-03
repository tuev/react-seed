import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container } from 'reactstrap'
import items from './categories.json'
import CategoriesItem from './CategoriesItem'
import { NextArrow, PrevArrow } from './CategoriesArrows'
import './categories.scss'

export default class Responsive extends Component {
  render () {
    const _slickSettings = {
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

    return (
      <div className='categories-event'>
        <Container>
          <h2 className='categories-event__title'> Categories to explore </h2>
          <Slider {..._slickSettings}>
            {items.map((item, idx) => (
              <CategoriesItem key={idx} {...item} />
            ))}
          </Slider>
        </Container>
      </div>
    )
  }
}
