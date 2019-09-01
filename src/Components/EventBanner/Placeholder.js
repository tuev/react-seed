import React from 'react'
import ContentLoader from 'react-content-loader'
import { Container, Row, Col } from 'reactstrap'

const Placeholder = () => {
  return (
    <div className='event-banner'>
      <Container>
        <Row className='event-banner__content d-flex align-items-center justify-content-center'>
          <Col sm='8' xs='12' className='pl-0 pr-0'>
            <div className='event-banner__content-create-event'>
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
            </div>
          </Col>
          <Col sm='4' xs='12' className='pl-0 pr-0'>
            <div style={{ width: '100%', minHeight: 50, overflow: 'hidden' }}>
              <ContentLoader
                height={50}
                width={6000}
                speed={2}
                primaryColor='#f3f3f3'
                secondaryColor='#ecebeb'
              >
                <rect x='2' y='2' rx='0' ry='0' width='9000' height='300' />
              </ContentLoader>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Placeholder
