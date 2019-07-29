import React from 'react'
import { Container, Row } from 'reactstrap'
import DropdownItem from './SearchTimeItem'

const Dropdown = ({ items = [], setInputOn }) => (
  <div className='header-search__drop-down'>
    <Container>
      <Row>
        <div className='header-search__item--header  pb-0'>
          <h6>Any date</h6>
        </div>
      </Row>
      {items.map((item, idx) => (
        <div key={idx} onMouseEnter={() => setInputOn(item)}>
          <DropdownItem item={item} />
        </div>
      ))}
    </Container>
  </div>
)

export default Dropdown
