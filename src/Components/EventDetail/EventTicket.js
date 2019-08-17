import React from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Sticky } from 'react-sticky'
import moment from 'moment'

const EventTicket = ({ price = '', name = '', date = '' }) => {
  const _stickyStyle = ({ isSticky }) => ({
    zIndex: '1000',
    boxShadow: isSticky ? '0 8px 20px -9px rgba(0,0,0,0.3)' : 'none'
  })
  const eventTime = moment(date).format('LLLL')

  return (
    <Sticky topOffset={300} bottomOffset={400}>
      {({ style, isSticky, ...restProps }) => (
        <div
          style={{
            ...style,
            ..._stickyStyle(isSticky, restProps)
          }}
        >
          <Row className='event-detail__ticket'>
            <Col
              md='1'
              className='d-flex justify-content-center align-items-center p-0 event-detail__ticket--actions'
            >
              <div className='event-detail__ticket--share'>
                <FontAwesomeIcon icon={faShareAlt} title='Share event' />
              </div>
              <div className='event-detail__ticket--like'>
                <FontAwesomeIcon icon={faThumbsUp} title='Like event' />
              </div>
            </Col>
            {isSticky && (
              <Col md='6' className='event-detail__ticket--title text-left'>
                <p className='title__name'>{name}</p>
                <p className='title__time'>{eventTime}</p>
              </Col>
            )}
            {isSticky ? (
              <Col md='5' xs='12'>
                <div className='event-detail__ticket--tickets d-flex'>
                  <div className='tickets__price mt-auto'>{price}</div>
                  <button>Tickets</button>
                </div>
              </Col>
            ) : (
              <Col md='11' xs='12'>
                <div className='event-detail__ticket--tickets d-flex'>
                  <div className='tickets__price mt-auto'>{price}</div>
                  <button>Tickets</button>
                </div>
              </Col>
            )}
          </Row>
        </div>
      )}
    </Sticky>
  )
}
export default EventTicket
