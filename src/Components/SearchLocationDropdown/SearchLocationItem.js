import React from 'react'
import { Row, Col } from 'reactstrap'

const DropdownItem = ({ address }) => (
  <Row className='header-search__item'>
    <Col>
      <div className='header-search__item--address'>{address}</div>
    </Col>
  </Row>
)

export default DropdownItem
