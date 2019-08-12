import React from 'react'
import CustomPaging from './SliderCustomPaging'
// import { connect } from "react-redux";

// const SliderConfig = (sliderSpeed) => ({
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
  // speed: sliderSpeed,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default SliderConfig

// const mapStateToProps = state => {
//   const { sliderData } = state;
//   const { sliderSpeed } = sliderData;
//   return { sliderSpeed };
// };

// export default connect(mapStateToProps)(SliderConfig);
