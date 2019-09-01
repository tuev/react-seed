import React from 'react'
import ContentLoader from 'react-content-loader'

const Placeholder = () => {
  return (
    <div style={{ width: '100%', minHeight: 50, overflow: 'hidden' }}>
      <ContentLoader
        height={300}
        width={6000}
        speed={2}
        primaryColor='#f3f3f3'
        secondaryColor='#ecebeb'
      >
        <rect x='2' y='2' rx='0' ry='0' width='9000' height='300' />
      </ContentLoader>
    </div>
  )
}

export default Placeholder
