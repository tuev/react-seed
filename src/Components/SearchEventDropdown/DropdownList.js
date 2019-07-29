import React from 'react'
import { Container, Row } from 'reactstrap'
import DropdownItem from './SearchEventItem'

const Dropdown = ({ items = [], setInput }) => (
  <div className='header-search__drop-down'>
    <Container>
      <Row className='header-search__item--header'>
        <div>
          <h3>Events</h3>
        </div>
      </Row>
      {items.map((item, idx) => (
        <div key={idx} onMouseEnter={() => setInput(item.title)} >
          <DropdownItem {...item} />
        </div>
      ))}
    </Container>
  </div>
)

export default Dropdown
