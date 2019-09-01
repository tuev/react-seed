import React from 'react'
import { Container } from 'reactstrap'
import { StickyContainer } from 'react-sticky'
import EventHeader from './EventHeader'
import EventBanner from './EventBanner'
import EventTicket from './EventTicket'
import EventDescription from './EventDescription'
import EventOrganizer from './EventOrganization'
import EventMap from './EventMap'
import EventOther from './RelatedEvent'
import './scss/eventDetail.scss'

const EventDetail = () => {
  return (
    <StickyContainer>
      <div className='event-detail'>
        <EventHeader />
        <Container>
          <EventBanner />
          <EventTicket />
          <EventDescription />
          <EventOrganizer />
          <EventMap />
        </Container>
        <Container>
          <EventOther />
        </Container>
      </div>
    </StickyContainer>
  )
}

export default EventDetail
