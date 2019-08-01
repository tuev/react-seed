import React from 'react'
import { Container, Row } from 'reactstrap'

const DropdownList = ({
  DropdownItem,
  headerDropdown,
  items = [],
  mouseEnterEvent,
  setInput,
  setOpen
}) => {
  const _onMouseEnter = item =>
    mouseEnterEvent ? () => setInput(item.title ? item.title : item) : null
  const _onClick = item => () => {
    setInput(item.title ? item.title : item)
    setOpen(false)
  }

  return (
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
            onMouseEnter={_onMouseEnter(item)}
            onClick={_onClick(item)}
          >
            <DropdownItem item={item} />
          </div>
        ))}
      </Container>
    </div>
  )
}
export default DropdownList
