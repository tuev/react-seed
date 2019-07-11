import React, { Component } from 'react'
import { Card, CardImg, CardBody, Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUpload } from '@fortawesome/free-solid-svg-icons'
import './event.scss'

export default class EventItem extends Component {
  render () {
    const { items } = this.props
    return (
      <div>
        {items.map((item, idx) => {
          return (
            <Col XS='12' md='4'>
              <Row>
                <Card>
                  <CardImg
                    width='286px'
                    height='180px'
                    src={item.image}
                    alt={item.alt}
                  />
                  <div className='d-flex justify-content-end'>
                    <Button type='button' className='btn btn-light'><FontAwesomeIcon icon={faHeart} /></Button>
                    <Button type='button' className='btn btn-light'><FontAwesomeIcon icon={faUpload} /></Button>
                  </div>
                  <CardBody>
                    <Row>
                      <Col xs='12' md='3' className='d-flex flex-column'>
                        <span className='event-time--month'>{item.month}</span>
                        <span className='event-time--date'>{item.date}</span>
                      </Col>
                      <Col xs='12' md='9' className='d-flex align-items-start flex-column bd-highlight mb-3'>
                        <span className='event-title'>{item.title}</span>
                        <span>{item.content}</span>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Row>
            </Col>
          )
        })}
      </div>
    )
  }
}
