import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import useOnOutsideClick from 'Hooks/UseOnOutsideClick'
import DropdownList from '../SearchDropdownList'
import DropdownItem from './SearchLocationItem'

const SearchLocation = ({ locationSlug = '', items }) => {
  const [isOpen, setOpen] = useState(false)
  const [inputIn, setInput] = useState(locationSlug)
  const { innerBorderRef } = useOnOutsideClick(() => setOpen(false))
  const itemsAddress = items.map(item => item.address)

  return (
    <Container className='search-in'>
      <Row>
        <div>In</div>
      </Row>
      <Row>
        <div className='header-search__input-wrapper'>
          <input
            className='input-search'
            type='search'
            placeholder='Your location'
            value={inputIn}
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
              headerDropdown={'Popular'}
              items={itemsAddress}
              setInput={setInput}
              setOpen={setOpen}
            />
          </Row>
        </div>
      )}
    </Container>
  )
}

export default SearchLocation
