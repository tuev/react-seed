import React from 'react'
import { Row, Col } from 'reactstrap'

const SearchTimeItem = ({ item = '' }) => (
  <Row className='header-search__item  pb-0 pt-0'>
    <Col>
      <span className='header-search__item--title'>{item}</span>
    </Col>
  </Row>
)

export default SearchTimeItem
