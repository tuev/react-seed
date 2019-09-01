import React from 'react'
import ContentLoader from 'react-content-loader'
import { Container } from 'reactstrap'

const Placeholder = () => {
  return (
    <div className='slider-event'>
      <Container>
        <h2 className='slider-event__title'>
          <div style={{ width: 50, minHeight: 20, overflow: 'hidden' }}>
            <ContentLoader
              height={20}
              width={50}
              speed={2}
              primaryColor='#f3f3f3'
              secondaryColor='#ecebeb'
            >
              <rect x='2' y='2' rx='0' ry='0' width='50' height='20' />
            </ContentLoader>
          </div>
        </h2>
        <div style={{ width: '100%', minHeight: 150, overflow: 'hidden' }}>
          <ContentLoader
            height={150}
            width={6000}
            speed={2}
            primaryColor='#f3f3f3'
            secondaryColor='#ecebeb'
          >
            <rect x='2' y='2' rx='0' ry='0' width='9000' height='150' />
          </ContentLoader>
        </div>
      </Container>
    </div>
  )
}

export default Placeholder
