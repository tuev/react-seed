import React from 'react'

const EventHeader = ({ image = '' }) => (
  <div className='event-detail__header'>
    <div
      className='event-detail__header--image'
      style={{
        backgroundImage: `url(${image})`
      }}
    />
  </div>
)

export default EventHeader
