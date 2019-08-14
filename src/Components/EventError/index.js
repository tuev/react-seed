import React from 'react'

const EventError = ({ error }) => (
  <div className='text-danger'>
    <h1>Load event error</h1>
    <p>Message: {error}</p>
  </div>
)

export default EventError
