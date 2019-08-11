import React from 'react'

const SlideItem = ({ image = '', alt = '' }) => (
  <img className='w-100 h-100' src={image} alt={alt} />
)

export default SlideItem
