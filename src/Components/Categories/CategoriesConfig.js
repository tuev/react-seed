import React from 'react'
import { NextArrow, PrevArrow } from './CategoriesArrows'

const CategoriesConfig = {
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

export default CategoriesConfig
