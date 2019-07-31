import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import './eventBanner.scss'

const EventBanner = () => (
  <div className='event-banner'>
    <Container>
      <Row className='event-banner__content d-flex align-items-center'>
        <Col md='8' sm='12'>
          <div className='event-banner__content-create-event'>
            Want to create an <span className='event-text'>event</span>?
          </div>
        </Col>
        <Col md='4' sm='12'>
          <div className='event-banner__content-learn-more'>
            <div>Learn more </div>
            <FontAwesomeIcon icon={faChevronCircleRight} className='icon' />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default EventBanner
