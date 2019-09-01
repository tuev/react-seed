import React, { useMemo } from 'react'
import { Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitterSquare,
  faInstagram,
  faFacebookSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import moment from 'moment'
import { get } from 'lodash'

const EventDescription = () => {
  const description = useSelector(state =>
    get(state, 'eventDetail.data.description')
  )
  const timeInfo = useSelector(state => get(state, 'eventDetail.data.time'))
  const location = useSelector(state => get(state, 'eventDetail.data.location'))

  const eventTimeDate = useMemo(() => moment(timeInfo).format('DD/MM/YYYY'), [
    timeInfo
  ])
  const eventTimeHour = useMemo(() => moment(timeInfo).format('hh:mm'), [
    timeInfo
  ])

  return (
    <Row className='event-detail__description'>
      <Col md='9' xs='12'>
        <div className='event-detail__description--description'>
          <h4 className='my-2'>Description</h4>
          <p className='text-left'>
            <span>{description}</span>
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
            <h6>{eventTimeDate}</h6>
            <h7>{eventTimeHour}</h7>
          </Col>
          <Col md='12' xs='6' className='info__location'>
            <h5>Location</h5>
            <span>{location}</span>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default EventDescription
