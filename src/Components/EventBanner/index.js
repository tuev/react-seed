import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import './eventBanner.scss'

const EventBanner = () => (
  <div className='event-banner'>
    <Container>
      <Row className='event-banner__content d-flex align-items-center justify-content-center'>
        <Col sm='8' xs='12' className='pl-0 pr-0'>
          <div className='event-banner__content-create-event'>
            Want to create an <span className='event-text'>event</span>?
          </div>
        </Col>
        <Col sm='4' xs='12' className='pl-0 pr-0'>
          <div
            className='event-banner__content-learn-more
          d-flex align-items-center justify-content-center justify-content-sm-start text-right'
          >
            Learn more
            <div className='icon'>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default EventBanner
