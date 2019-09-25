import React from 'react'
import { useSelector } from 'react-redux'
import { get } from 'lodash'
import defaultBanner from './defaultBanner.jpg'

const EventHeader = () => {
  const image = useSelector(state =>
    get(state, 'eventDetail.data.banner.url', defaultBanner)
  )

  return (
    <div className='event-detail__header'>
      <div
        className='event-detail__header--image'
        style={{
          backgroundImage: `url(${image})`
        }}
      />
    </div>
  )
}

export default EventHeader
