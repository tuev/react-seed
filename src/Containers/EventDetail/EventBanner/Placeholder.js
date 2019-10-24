import React from 'react'
import { Row, Col } from 'reactstrap'
import ContentLoader from 'react-content-loader'

const EventListPlaceholder = () => (
  <Row className='event-detail__banner'>
    <Col md='8' xs='12' className='event-detail__banner--image'>
      <div style={{ width: '100%', minHeight: 300, overflow: 'hidden' }}>
        <ContentLoader
          height={300}
          width={600}
          speed={2}
          primaryColor='#f3f3f3'
          secondaryColor='#ecebeb'
        >
          <rect x='2' y='2' rx='0' ry='0' width='900' height='300' />
        </ContentLoader>
      </div>
    </Col>
    <Col md='4' xs='12' className='event-detail__banner--info'>
      <div className='event-info d-flex align-items-start'>
        <div className='event-info__time'>
          <div className='event-info__month'>
            <ContentLoader
              height={50}
              width={60}
              speed={2}
              primaryColor='#f3f3f3'
              secondaryColor='#ecebeb'
            >
              <rect x='2' y='2' rx='0' ry='0' width='50' height='50' />
              <rect x='2' y='2' rx='0' ry='0' width='80' height='50' />
              <rect x='2' y='2' rx='0' ry='0' width='30' height='50' />
            </ContentLoader>
          </div>
          <div className='event-info__day'>
            <ContentLoader
              height={50}
              width={60}
              speed={2}
              primaryColor='#f3f3f3'
              secondaryColor='#ecebeb'
            >
              <rect x='2' y='2' rx='0' ry='0' width='50' height='50' />
            </ContentLoader>
          </div>
        </div>
        <div>
          <h1 className='event-info__name'>
            <ContentLoader
              height={50}
              width={70}
              speed={2}
              primaryColor='#f3f3f3'
              secondaryColor='#ecebeb'
            >
              <rect x='2' y='2' rx='0' ry='0' width='70' height='50' />
            </ContentLoader>
          </h1>
        </div>
        <div className='event-info__price mt-auto'>
          <ContentLoader
            height={50}
            width={60}
            speed={2}
            primaryColor='#f3f3f3'
            secondaryColor='#ecebeb'
          >
            <rect x='2' y='2' rx='0' ry='0' width='50' height='50' />
          </ContentLoader>
        </div>
      </div>
    </Col>
  </Row>
)

export default EventListPlaceholder
