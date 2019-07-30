import React from 'react'
import { Row, Col } from 'reactstrap'

const SearchLocationItem = ({ item }) => (
  <Row className='header-search__item'>
    <Col>
      <div className='header-search__item--address'>{item}</div>
    </Col>
  </Row>
)

export default SearchLocationItem
