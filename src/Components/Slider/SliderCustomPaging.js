import React from 'react'
import { connect } from 'react-redux'
import { slickGoTo } from 'Redux/Slider/slider.action'

const CustomPaging = ({ index, onClick, data, slickGoTo }) => (
  <div
    className='slider-custom-paging__image'
    onClick={onClick}
    onMouseEnter={() => slickGoTo(index)}
    style={{
      backgroundImage: `url(${data[index].image || ''})`
    }}
  />
)

const mapStateToProps = state => {
  const { sliderData } = state
  const { data } = sliderData
  return { data }
}

const mapDispatchToProps = dispacth => ({
  slickGoTo: index => dispacth(slickGoTo(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomPaging)
