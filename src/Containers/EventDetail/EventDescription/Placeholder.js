import React from 'react'
import { Row, Col } from 'reactstrap'
import ContentLoader from 'react-content-loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitterSquare,
  faInstagram,
  faFacebookSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const EventListPlaceholder = () => (
  <Row className='event-detail__description'>
    <Col md='9' xs='12'>
      <div className='event-detail__description--description'>
        <h4 className='my-2'>Description</h4>
        <p className='text-left'>
          <span>
            <ContentLoader height={130} width={400}>
              <rect x='0' y='0' rx='3' ry='3' width='250' height='10' />
              <rect x='20' y='20' rx='3' ry='3' width='220' height='10' />
              <rect x='20' y='40' rx='3' ry='3' width='170' height='10' />
              <rect x='0' y='60' rx='3' ry='3' width='250' height='10' />
              <rect x='20' y='80' rx='3' ry='3' width='200' height='10' />
              <rect x='20' y='100' rx='3' ry='3' width='80' height='10' />
            </ContentLoader>
            <ContentLoader height={130} width={400}>
              <rect x='0' y='0' rx='3' ry='3' width='250' height='10' />
              <rect x='20' y='20' rx='3' ry='3' width='220' height='10' />
              <rect x='20' y='40' rx='3' ry='3' width='170' height='10' />
              <rect x='0' y='60' rx='3' ry='3' width='250' height='10' />
              <rect x='20' y='80' rx='3' ry='3' width='200' height='10' />
              <rect x='20' y='100' rx='3' ry='3' width='80' height='10' />
            </ContentLoader>
          </span>
        </p>
        <div className='share-event'>
          <h5>Share With Friends</h5>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className='share-event__icon'
            title='Share this page on Facebook'
          />
          <FontAwesomeIcon
            icon={faTwitterSquare}
            className='share-event__icon'
            title='Share this page on Twitter'
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className='share-event__icon'
            title='Share this page on Linkedin'
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className='share-event__icon'
            title='Share this page on Instagram'
          />
        </div>
      </div>
    </Col>
    <Col md='3' xs='12'>
      <Row className='event-detail__description--info text-left'>
        <Col md='12' xs='6' className='info__date'>
          <h5>Date And Time</h5>
          <ContentLoader
            height={160}
            width={100}
            speed={2}
            primaryColor='#d9d9d9'
            secondaryColor='#ecebeb'
          >
            <rect x='0' y='0' rx='3' ry='3' width='40' height='10' />
            <rect x='0' y='20' rx='3' ry='3' width='70' height='10' />
          </ContentLoader>
        </Col>
      </Row>
    </Col>
  </Row>
)

export default EventListPlaceholder
