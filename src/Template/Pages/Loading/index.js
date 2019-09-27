import React from 'react'
import './Loading.scss'

const Loading = () => {
  return (
    <div
      className='d-flex align-items-center justify-content-center'
      style={{ height: 'calc(100vh - 70px)' }}
    >
      <div className='loader'>Loading...</div>
    </div>
  )
}

export default Loading
