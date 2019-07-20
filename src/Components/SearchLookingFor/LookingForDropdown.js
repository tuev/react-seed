import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const LookingForDropdown = () => (
  <div
    style={{
      backgroundColor: 'lightblue',
      zIndex: '100',
      position: 'absolute',
      marginRight: '12px'
    }}
  >
    <Container>
      <Row>
        <h3>Events</h3>
      </Row>
      <Row>
        <Col xs='3'>Image</Col>
        <Col className='d-flex flex-column align-items-start justify-content-left'>
          <p className='item__info item__info--title'>
            ĐÁNH THỨC SỰ GIÀU CÓ 42 - Tp. Hồ Chí Minh
          </p>
          <p className='item__info item__info--content'>Fri, Aug 16, 8:00am</p>
          <p className='item__info item__info--address'>
            Trung tâm Hội nghị Queen Plaza Kỳ Hòa, Hồ Chí Minh
          </p>
        </Col>
      </Row>
    </Container>
  </div>
)

export default LookingForDropdown
