import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import useOnOutsideClick from '../../Hooks/UseOnOutsideClick'
import LookingForDropdown from './DropdownList'

const SearchLookingFor = ({ items }) => {
  const [isOpen, setOpen] = useState(false)
  const [inputLookingFor, setInputLookingFor] = useState('')
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
            value={inputLookingFor}
            onClick={() => setOpen(true)}
            readOnly
          />
        </div>
      </Row>
      {isOpen && (
        <div ref={innerBorderRef}>
          <Row>
            <LookingForDropdown
              items={items}
              setInputLookingFor={setInputLookingFor}
            />
          </Row>
        </div>
      )}
    </Container>
  )
}

export default SearchLookingFor
