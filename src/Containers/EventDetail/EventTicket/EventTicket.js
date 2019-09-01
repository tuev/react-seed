import React, { useCallback } from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Sticky } from 'react-sticky'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { get } from 'lodash'

const EventTicket = () => {
  const eventTime = useSelector(state => {
    const time = get(state, 'eventDetail.data.time')
    return moment(time).format('LLLL')
  })
  const name = useSelector(state => get(state, 'eventDetail.data.name'))
  const price = useSelector(state => get(state, 'eventDetail.data.price'))

  const _stickyStyle = useCallback(
    ({ isSticky }) => ({
      zIndex: '1000',
      boxShadow: isSticky ? '0 8px 20px -9px rgba(0,0,0,0.3)' : 'none'
    }),
    []
  )
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
