import React from 'react'
import { Container } from 'reactstrap'
import { StickyContainer } from 'react-sticky'
import EventHeader from './EventHeader'
import EventBanner from './EventBanner'
import EventTicket from './EventTicket'
import EventDescription from './EventDescription'
import EventOrganizer from './EventOrganizer'
import EventMap from './EventMap'
import EventOther from './EventOther'
import './scss/eventDetail.scss'

const EventDetail = ({
  name = '',
  author = '',
  description = '',
  date = '',
  price = '',
  location = '',
  image = '',
  createdAt = ''
}) => {
  const priceFormat = price
    ? new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
    : 'Free'

  return (
    <StickyContainer>
      <div className='event-detail'>
        <EventHeader image={image} />
        <Container>
          <EventBanner
            date={date}
            price={priceFormat}
            name={name}
            image={image}
          />
          <EventTicket price={priceFormat} />
          <EventDescription
            description={description}
            location={location}
            date={date}
          />
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
