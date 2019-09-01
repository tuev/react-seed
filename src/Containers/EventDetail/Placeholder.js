import React from 'react'
import { Container } from 'reactstrap'
import EventHeader from './EventHeader/Placeholder'
import EventBanner from './EventBanner/Placeholder'
import EventDescription from './EventDescription/Placeholder'
// import EventOrganizer from './EventOrganization/Placeholder'
// import EventMap from './EventMap/Placeholder'
// import EventOther from './RelatedEvent/Placeholder'
import './scss/eventDetail.scss'

const EventDetail = () => {
  return (
    <div className='event-detail'>
      <EventHeader />
      <Container>
        <EventBanner />
        <EventDescription />
      </Container>
      <Container>{/* <EventOther /> */}</Container>
    </div>
  )
}

export default EventDetail
