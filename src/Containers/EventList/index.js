import React from 'react'
import { Container, Row } from 'reactstrap'
import { isEmpty } from 'lodash'
import EventItem from '../EventItem'

const EventList = ({ subject = '', items = [] }) => {
  console.log(items)
  return (
    <Container>
      <Row style={{ paddingBottom: 35 }}>
        <h1
          style={{
            fontSize: 52,
            fontWeight: 800,
            letterSpacing: 1,
            lineHeight: '64px'
          }}
        >
          {subject}
        </h1>
      </Row>
      <Row>
        {!isEmpty(items) &&
          items.map((item, idx) => <EventItem key={idx} {...item} />)}
      </Row>
    </Container>
  )
}

export default EventList
