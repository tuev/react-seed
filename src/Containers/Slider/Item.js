import React from 'react'

const SlideItem = ({ image = '', alt = '', banner = '' } = {}) => (
  <div
    style={{
      width: '100%',
      height: 300,
      backgroundImage: `url(${banner || image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}
  />
)

export default SlideItem
