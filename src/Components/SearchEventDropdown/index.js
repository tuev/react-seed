import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import useOnOutsideClick from '../../Hooks/UseOnOutsideClick'
import DropdownList from '../SearchDropdownList'
import DropdownItem from './SearchEventItem'

const SearchEvent = ({ items = [] }) => {
  const [isOpen, setOpen] = useState(false)
  const [inputVal, setInput] = useState('')
  const { innerBorderRef } = useOnOutsideClick(() => setOpen(false))

  return (
    <Container className='search-looking-for'>
      <Row>
        <div>Looking For</div>
      </Row>
      <Row>
        <div className='header-search__input-wrapper'>
          <input
            className='input-search'
            type='search'
            placeholder='Event'
            value={inputVal}
            onClick={() => setOpen(true)}
            readOnly
          />
        </div>
      </Row>
      {isOpen && (
        <div ref={innerBorderRef}>
          <Row>
            <DropdownList
              DropdownItem={DropdownItem}
              headerDropdown={'Event'}
              items={items}
              mouseEnterEvent
              setInput={setInput}
              setOpen={setOpen}
            />
          </Row>
        </div>
      )}
    </Container>
  )
}

export default SearchEvent
