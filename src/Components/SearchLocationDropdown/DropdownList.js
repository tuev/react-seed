import React from 'react'
import { Container, Row } from 'reactstrap'
import DropdownItem from './SearchLocationItem'

const Dropdown = ({ items = [], setInput, setOpen }) => (
  <div className='header-search__drop-down'>
    <Container>
      <Row className='header-search__item--header'>
        <div>
          <h3>Popular</h3>
        </div>
      </Row>
      {items.map((item, idx) => (
        <div key={idx} onMouseEnter={() => setInput(item)} onMouseLeave={() => setInput('')}
          onClick={() => { setInput(item.title); setOpen(false) }}>
          <DropdownItem address={item} />
        </div>
      ))}
    </Container>
  </div>
)

export default Dropdown
