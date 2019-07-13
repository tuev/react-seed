import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Items from './event.json'
import Item from './Item'
// import "./event.scss";

export default class EventItemList extends Component {
  _renderItem = (event, idx) => {
    console.log(event)
    const childPropsItem = { ...event }
    return (
      <Col key={idx} lg='4' md='6' sm='12' xs='12' className='event__list'>
        <Item {...childPropsItem} />
      </Col>
    )
  };

  render () {
    console.clear()
    return (
      <div>
        <Container>
          <Row>{Items.map(this._renderItem)}</Row>
        </Container>
      </div>
    )
  }
}
