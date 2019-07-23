import React from 'react'
import { Container, Row } from 'reactstrap'
import DropdownItem from './DropdownItem'

const LookingForDropdown = ({ items = [] }) => (
  <div className='drop-down'>
    <Container>
      <Row className='drop-down__header'>
        <div>
          <h3>Events</h3>
        </div>
      </Row>
      {items.map((item, idx) => <DropdownItem key={idx} {...item} />)}
    </Container>
  </div>
)

export default LookingForDropdown
