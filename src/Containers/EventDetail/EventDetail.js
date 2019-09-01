import React from 'react'
import { Container } from 'reactstrap'
import { StickyContainer } from 'react-sticky'
import EventHeader from './EventHeader'
import EventBanner from './EventBanner'
import EventTicket from './EventTicket'
import EventDescription from './EventDescription'
// TODO: API GET AUTHOR INFOMATION FOR EVENTORGANIZE COMPONENT
// import EventOrganizer from './EventOrganization'
// TODO: ADD GOOGLE MAP API FOR EVENT MAP COMPONENT
// import EventMap from './EventMap'
// TODO: ADD RELATED EVENT DATA FOR RELACEEDEVENT COMPONENT
// import EventOther from './RelatedEvent'

const EventDetail = () => {
  return (
    <StickyContainer>
      <div className='event-detail'>
        <EventHeader />
        <Container>
          <EventBanner />
          <EventTicket />
          <EventDescription />
          {/* <EventOrganizer /> */}
          {/* <EventMap /> */}
        </Container>
        <Container>{/* <EventOther /> */}</Container>
      </div>
    </StickyContainer>
  )
}

export default EventDetail
