import React from 'react'
import { Container, Row } from 'reactstrap'
import DropdownItem from './DropdownItem'

const LookingForDropdown = () => (
  <div
    style={{
      backgroundColor: 'lightblue',
      zIndex: '100',
      position: 'absolute',
      marginRight: '12px'
    }}
  >
    <Container>
      <Row>
        <div>
          <h3
            style={{ color: '#39364f', padding: '4px 24px', fontSize: '20px' }}
          >
            Events
          </h3>
        </div>
      </Row>
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
    </Container>
  </div>
)

export default LookingForDropdown
