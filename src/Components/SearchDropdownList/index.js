import React from 'react'
import { Container, Row } from 'reactstrap'

const DropdownList = ({
  DropdownItem,
  headerDropdown,
  items = [],
  mouseEnterEvent,
  setInput,
  setOpen
}) => (
  <div className='header-search__drop-down'>
    <Container>
      <Row>
        <div className='header-search__item--header'>
          <h6>{headerDropdown}</h6>
        </div>
      </Row>
      {items.map((item, idx) => (
        <div
          key={idx}
          onMouseEnter={
            mouseEnterEvent
              ? () => setInput(item.title ? item.title : item)
              : null
          }
          onClick={() => {
            setInput(item.title ? item.title : item)
            setOpen(false)
          }}
        >
          <DropdownItem item={item} />
        </div>
      ))}
    </Container>
  </div>
)

export default DropdownList
