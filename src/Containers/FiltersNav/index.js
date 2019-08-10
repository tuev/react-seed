import React from 'react'
import { Container, Row } from 'reactstrap'
import './filters.scss'

const EventFilters = () => (
  <Container className='event-filters'>
    <Row className='d-flex justify-content-end'>
      <div className='event-filters__item'>Any day</div>
      <div className='event-filters__item'>Any price</div>
      <div className='event-filters__item'>Any cataegory</div>
    </Row>
  </Container>
)

export default EventFilters
