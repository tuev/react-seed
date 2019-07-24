import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import useOnOutsideClick from '../Search/UseOnOutsideClick'
import InDropdown from './DropdownList'

const SearchIn = ({ locationSlug = '', items }) => {
  const [isOpen, setOpen] = useState(false)
  const [inputIn, setInputIn] = useState(locationSlug)
  const { innerBorderRef } = useOnOutsideClick(() => setOpen(false))
  const itemsAddress = items.reduce(
    (acc, curVal) => acc.concat(curVal.address),
    []
  )

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
          />
        </div>
      </Row>
      {isOpen && (
        <div ref={innerBorderRef}>
          <Row>
            <InDropdown items={itemsAddress} setInputIn={setInputIn} /> *
          </Row>
        </div>
      )}
    </Container>
  )
}

export default SearchIn
