import React from 'react'
import { Container, Row } from 'reactstrap'
import LookingForDropdown from './LookingForDropdown'
import './SearchLookingFor.scss'

const SearchLookingFor = ({ items = [] }) => (
  <Container className='search-looking-for'>
    <Row>
      <div>Looking For</div>
    </Row>
    <Row className='search-looking-for__input'>
      <div className='search-looking-for__input-wrapper'>
        <input type='search' placeholder='Event' />
      </div>
    </Row>
    <Row>
      <LookingForDropdown items={items} />
    </Row>
  </Container>
)

export default SearchLookingFor
