import React from 'react'

const SlideItem = ({ image = '', alt = '' }) => (
  <div style={{ width: '100%', height: 300, textAlign: 'center' }}>
    <img className='w-auto h-100 my-0 mx-auto' src={image} alt={alt} />
  </div>
)

export default SlideItem
