import React from 'react'
import { Row, Col } from 'reactstrap'

const DropdownItem = () => (
  <Row style={{ paddingTop: '16px', paddingBottom: '16px' }}>
    <Col xs='3' className='d-flex align-self-center pr-0'>
      <div>
        <img
          src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61549042%2F178938166142%2F1%2Foriginal.jpg?w=512&amp;auto=compress&amp;rect=0%2C133%2C1600%2C800&amp;s=ef49e06d4e6cef2bb57e81ad381d19f3'
          alt=''
          style={{ width: '100%' }}
        />
      </div>
    </Col>
    <Col>
      <div
        className='d-flex flex-column justify-content-start align-items-start '
        style={{ 'text-align': 'left' }}
      >
        <p
          className='item__info item__info--title'
          style={{ fontSize: '14px', color: '#1e0a3c', margin: '0' }}
        >
          ĐÁNH THỨC SỰ GIÀU CÓ 42 - Tp. Hồ Chí Minh
        </p>
        <p
          className='item__info item__info--content'
          style={{ fontSize: '12px', color: '#6f7287', margin: '0' }}
        >
          Fri, Aug 16, 8:00am
        </p>
        <p
          className='item__info item__info--address'
          style={{ fontSize: '12px', color: '#6f7287', margin: '0' }}
        >
          Trung tâm Hội nghị Queen Plaza Kỳ Hòa, Hồ Chí Minh
        </p>
      </div>
    </Col>
  </Row>
)

export default DropdownItem
