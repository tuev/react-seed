import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import EventItem from '../EventItem'

export default class EventList extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col XS='12' md='4'>
            <EventItem />
          </Col>
          <Col XS='12' md='4'>
            <EventItem />
          </Col>
          <Col XS='12' md='4'>
            <EventItem />
          </Col>
        </Row>
      </Container>
    )
  }
}
