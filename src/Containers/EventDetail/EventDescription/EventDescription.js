import React, { useMemo } from 'react'
import { Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import { Comments } from 'react-facebook'
import moment from 'moment'
import { get } from 'lodash'

const EventDescription = () => {
  const description = useSelector(state =>
    get(state, 'eventDetail.data.description')
  )
  const timeInfo = useSelector(state =>
    get(state, 'eventDetail.data.timeStart')
  )
  const location = useSelector(state => get(state, 'eventDetail.data.address'))

  const eventTimeDate = useMemo(() => moment(timeInfo).format('DD/MM/YYYY'), [
    timeInfo
  ])
  const eventTimeHour = useMemo(() => moment(timeInfo).format('hh:mm'), [
    timeInfo
  ])

  const createMarkup = () => {
    return { __html: description }
  }

  return (
    <Row className='event-detail__description'>
      <Col md='9' xs='12'>
        <div className='event-detail__description--description'>
          <h4 className='my-2'>Description</h4>
          <div className='text-left'>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
          <div className='share-event'>
            <Comments href='http://www.facebook.com' />
          </div>
        </div>
      </Col>
      <Col md='3' xs='12'>
        <Row className='event-detail__description--info text-left'>
          <Col md='12' xs='6' className='info__date'>
            <h5>Date And Time</h5>
            <h6>{eventTimeDate}</h6>
            <h6>{eventTimeHour}</h6>
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
