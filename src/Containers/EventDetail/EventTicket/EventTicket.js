import React, { useCallback, useMemo } from 'react'
import { Row, Col } from 'reactstrap'
import { Like } from 'react-facebook'
import { Sticky } from 'react-sticky'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { get } from 'lodash'

const EventTicket = () => {
  const eventTime = useSelector(state => {
    const time = get(state, 'eventDetail.data.timeStart')
    return moment(time).format('LLLL')
  })
  const name = useSelector(state => get(state, 'eventDetail.data.name'))
  const _id = useSelector(state => get(state, 'eventDetail.data.price'))

  const urlDetail = useMemo(
    () => `https://brightsmile.firebaseapp.com/#/event/${_id}`,
    [_id]
  )
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
            {isSticky && (
              <Col
                xs='12'
                md='6'
                className='event-detail__ticket--title text-left'
              >
                <p className='title__name'>{name}</p>
                <p className='title__time'>{eventTime}</p>
              </Col>
            )}
            {isSticky ? (
              <Col md='5' xs='12'>
                <div className='event-detail__ticket--tickets d-flex align-items-md-center'>
                  <Like
                    href={urlDetail}
                    colorScheme='dark'
                    showFaces
                    share
                    size='large'
                    layout='button_count'
                  />
                </div>
              </Col>
            ) : (
              <Col md='11' xs='12'>
                <div className='event-detail__ticket--tickets d-flex align-items-center'>
                  <Like
                    href={urlDetail}
                    colorScheme='dark'
                    showFaces
                    share
                    size='large'
                    layout='button_count'
                  />
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
