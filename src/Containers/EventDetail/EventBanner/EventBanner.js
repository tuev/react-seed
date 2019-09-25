import React, { useMemo } from 'react'
import { Row, Col } from 'reactstrap'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { get } from 'lodash'
import eventImage from './defaultBanner.jpg'

const EventBanner = () => {
  const image = useSelector(state =>
    get(state, 'eventDetail.data.banner.url', eventImage)
  )
  const timeInfo = useSelector(state => get(state, 'eventDetail.data.date'))
  const name = useSelector(state => get(state, 'eventDetail.data.name'))
  const price = useSelector(state => get(state, 'eventDetail.data.price'))

  const eventMonth = useMemo(() => moment(timeInfo).format('MMM'), [timeInfo])
  const eventDay = useMemo(() => moment(timeInfo).format('DD'), [timeInfo])

  return (
    <Row className='event-detail__banner'>
      <Col md='8' xs='12' className='event-detail__banner--image'>
        <div
          className='image-background'
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      </Col>
      <Col md='4' xs='12' className='event-detail__banner--info'>
        <div className='event-info d-flex align-items-start'>
          <div className='event-info__time'>
            <div className='event-info__month'>{eventMonth}</div>
            <div className='event-info__day'> {eventDay}</div>
          </div>
          <div>
            <h1 className='event-info__name'>{name}</h1>
            <div className='d-flex'>
              <div className='event-info__organizer'>by Organizer</div>
              <div className='event-info__follow'>
                <button title='Follow'>Follow</button>
              </div>
            </div>
          </div>
          <div className='event-info__price mt-auto'>{price}</div>
        </div>
      </Col>
    </Row>
  )
}

export default EventBanner
