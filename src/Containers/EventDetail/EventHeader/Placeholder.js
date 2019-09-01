import React from 'react'
import ContentLoader from 'react-content-loader'

const EventListPlaceholder = () => (
  <div className='event-detail__header' style={{ overflow: 'hidden' }}>
    <ContentLoader
      height={300}
      width={1000}
      speed={3}
      primaryColor='#f3f3f3'
      secondaryColor='#b9b9b9'
    >
      <rect x='2' y='2' rx='0' ry='0' width='9000' height='300' />
      <rect x='498' y='27' rx='0' ry='0' width='69' height='45' />
    </ContentLoader>
  </div>
)

export default EventListPlaceholder
