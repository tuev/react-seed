import React from 'react'
import { Container, Row } from 'reactstrap'
import { isEmpty } from 'lodash'
import EventItem from '../EventItem'
import './eventList.scss'

const EventList = ({ items = [] }) => (
  <Container>
    <Row className='event-list'>
      <h1 className='subject'>Events</h1>
    </Row>
    <Row>
      {!isEmpty(items) &&
        items.map((item, idx) => <EventItem key={idx} {...item} />)}
    </Row>
  </Container>
)

export default EventList
