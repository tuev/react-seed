import React, { Component } from 'react'
import { Card, CardImg, CardBody, Row, Col } from 'reactstrap'
import eventData from './event'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'

import './event.scss'

export default class Event extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataEvent: eventData
    }
  }
  render () {
    return (
      <Card>
        <CardImg
          width='286px'
          height='180px'
          src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61549042%2F178938166142%2F1%2Foriginal.jpg?w=512&auto=compress&rect=0%2C133%2C1600%2C800&s=ef49e06d4e6cef2bb57e81ad381d19f3'
          // alt={event.alt}
        />

        <CardBody>
          <Row>
            <Col xs='12' md='3' className='d-flex flex-column'>
              <span className='event-time--month'>JUL</span>
              <span className='event-time--date'>9</span>
            </Col>
            <Col xs='12' md='9' className='d-flex justify-content-start'>
              <span>title</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
