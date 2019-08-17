import React from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Sticky } from 'react-sticky'

const EventTicket = ({ price = '' }) => {
  return (
    <Sticky>
      {({
        style,

        // the following are also available but unused in this example
        isSticky,
        wasSticky,
        distanceFromTop,
        distanceFromBottom,
        calculatedHeight
      }) => (
        <div style={{ ...style }}>
          <Row className='event-detail__ticket'>
            <Col
              md='1'
              xs='12'
              className='d-flex justify-content-center align-items-center p-0 event-detail__ticket--actions'
            >
              <div className='event-detail__ticket--share'>
                <FontAwesomeIcon icon={faShareAlt} title='Share event' />
              </div>
              <div className='event-detail__ticket--like'>
                <FontAwesomeIcon icon={faThumbsUp} title='Like event' />
              </div>
            </Col>
            <Col md='11' xs='12'>
              <div className='event-detail__ticket--tickets d-flex'>
                <div className='tickets__price mt-auto'>{price}</div>
                <button>Tickets</button>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Sticky>
  )
}

export default EventTicket
