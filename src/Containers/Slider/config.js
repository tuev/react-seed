import React from 'react'
import CustomPaging from './CustomPaging'

const SliderConfig = {
  customPaging: index => <CustomPaging index={index} />,
  dots: true,
  dotsClass:
    'slider-custom-paging d-flex align-items-center justify-content-end',
  pauseOnDotsHover: true,
  arrows: false,
  pauseOnHover: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  // fade : true,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default SliderConfig
