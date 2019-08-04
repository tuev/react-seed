import React from 'react'
import { Container, Row } from 'reactstrap'

const DropdownList = ({
  dropdownItem: DropdownItem,
  title,
  items = [],
  ...eventHandle
}) => {
  return (
    <div className='header-search__drop-down'>
      <Container>
        <Row className='mt-2'>
          <h6 className='header-search__item--header'>{title}</h6>
        </Row>
        {items.map((item, idx) => (
          <DropdownItem key={idx} {...item} {...eventHandle} />
        ))}
      </Container>
    </div>
  )
}
export default DropdownList
