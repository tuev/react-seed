import React from 'react'
import { Container, Row } from 'reactstrap'
import EventItemPlaceHolder from 'Components/EventItem/EventItem.placeholder'

const EventListPlaceholder = () => {
  return (
    <Container>
      <Row>
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <EventItemPlaceHolder />
          ))}
      </Row>
    </Container>
  )
}

export default EventListPlaceholder
