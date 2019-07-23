import React from 'react'
import { Container, Row } from 'reactstrap'
import LookingForDropdown from './LookingForDropdown'

const SearchLookingFor = () => (
  <Container>
    <Row>
      <div>Looking For</div>
    </Row>
    <Row>
      <div style={{ width: '100%' }}>
        <input
          type='search'
          placeholder='Event'
          style={{
            backgroundColor: '#1e0a3c',
            border: '1px solid red',
            borderLeft: '0px',
            borderRight: '0px',
            borderTop: '0px',
            color: '#fff',
            width: '100%',
            fontSize: '1.125rem',
            lineHeight: '1.5rem',
            fontWeight: '600'
          }}
        />
      </div>
    </Row>
    <Row>
      <LookingForDropdown />
    </Row>
  </Container>
)

export default SearchLookingFor
