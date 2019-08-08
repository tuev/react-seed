import React from 'react'

const SlideItem = ({ image, alt }) => (
  <div>
    <img className='w-100 h-100' src={image} alt={alt} />
  </div>
)

export default SlideItem
