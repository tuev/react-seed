import React from 'react'
import { Container, Row } from 'reactstrap'
import { isEmpty } from 'lodash'
import EventItem from '../EventItem'
import './eventList.scss'

const EventList = ({ subject = '', items = [] }) => (
  <Container>
    <Row className='event-list'>
      <h1 className='subject'>{subject}</h1>
    </Row>
    <Row>
      {!isEmpty(items) &&
        items.map((item, idx) => <EventItem key={idx} {...item} />)}
    </Row>
  </Container>
)

export default EventList
