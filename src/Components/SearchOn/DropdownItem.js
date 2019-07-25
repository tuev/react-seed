import React from 'react'
import { Row, Col } from 'reactstrap'

const DropdownItem = ({ item }) => (
  <Row className='header-search__item'>
    <Col>
      <span className='header-search__item--title'>
        {item}
      </span>
    </Col>
  </Row>
)

export default DropdownItem
