import React, { Component } from 'react'
import { Container, Row, Col, NavLink } from 'reactstrap'
// import EventItem from '../EventItem'
import eventData from './../EventItem/event.json'

export default class EventList extends Component {
  _renderEventItem = (item, idx) => {
    // const childProps = { ...item }
    return (
      <Col key={idx} md='12' sm='6' xs='12'>
        <div className='contentEvent'>
          <h4>{item.subject}</h4>
          <NavLink className='seeLink'>See more</NavLink>>
        </div>
        {/* <EventItem {...childProps} /> */}
        <span>this is Tue's code</span>
      </Col>
    )
  }
  render () {
    return (
      <Container>
        <Row>{eventData.map(this._renderEventItem)}</Row>
      </Container>
    )
  }
}
