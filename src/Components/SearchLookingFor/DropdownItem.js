import React from 'react'
import { Row, Col } from 'reactstrap'

const DropdownItem = ({
  image = '',
  alt = '',
  title = '',
  content = '',
  address = ''
}) => (
  <Row className='drop-down__item'>
    <Col xs='3' className='d-flex align-self-center pr-0'>
      <div>
        <img src={image} alt={alt} className='drop-down__item--image' />
      </div>
    </Col>
    <Col>
      <div className='d-flex flex-column justify-content-start align-items-start '>
        <p className='drop-down__item--title'>{title}</p>
        <p className='drop-down__item--content'>{content}</p>
        <p className='drop-down__item--address'>{address}</p>
      </div>
    </Col>
  </Row>
)

export default DropdownItem
