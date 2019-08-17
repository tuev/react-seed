import React from 'react'
import { Row, Col } from 'reactstrap'
import moment from 'moment'

const EventBanner = ({ date = '', price = '', image = '', name = '' }) => {
  const eventMonth = moment(date).format('MMM')
  const eventDay = moment(date).format('DD')

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
