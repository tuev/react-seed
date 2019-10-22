import React from 'react'
import { Container } from 'reactstrap'
import CreateEvent from './CreateEvent'
import SearchEvent from './SearchEvent'
import EventList from './EventList'
import './eventsManage.scss'

const EventsManage = () => (
  <Container>
    <div className='events-manage'>
      <CreateEvent />
      <SearchEvent />
      <EventList />
    </div>
  </Container>
)

export default EventsManage
