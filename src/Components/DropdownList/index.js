import React from 'react'
import { Container, Row } from 'reactstrap'

export default class DropdownList extends React.Component {
  render () {
    const {
      DropdownItem,
      headerDropdown,
      items = [],
      mouseEnterEvent,
      setInput,
      setOpen
    } = this.props
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
  }
}
