import React from 'react'
import { Container, Row } from 'reactstrap'

export default class DropdownList extends React.Component {
  render () {
    const { ComponentItem, titelSearch, items = [], setInput, setOpen } = this.props
    return (
      <div className='header-search__drop-down' style={{ color: 'black' }}>
        <Container>
          <Row>
            <div className='header-search__item--header'>
              <h6>{titelSearch}</h6>
            </div>
          </Row>
          {items.map((item, idx) => {
            // console.log(item)
            return (
              <div key={idx} onMouseEnter={() => setInput(item.title)}
                onMouseLeave={() => setInput('')}
                onClick={() => { setInput(item.title); setOpen(false) }}
              >
                {item.title}
                <ComponentItem item={item} />
              </div>
            )
          })
          }
        </Container>
      </div>
    )
  }
}
