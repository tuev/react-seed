import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import useOnOutsideClick from '../../Hooks/UseOnOutsideClick'
// import DropdownList from '../SearchDropdownList'
import DropdownList from './DropdownList'
import SearchEventItem from './SearchEventItem'

const SearchLookingFor = ({ items = [] }) => {
  const [isOpen, setOpen] = useState(false)
  const [input, setInput] = useState('')
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
            value={input}
            onClick={() => setOpen(true)}
            readOnly
          />
        </div>
      </Row>
      {isOpen && (
        <div ref={innerBorderRef}>
          <Row>
            <DropdownList
              ComponentItem={SearchEventItem}
              titelSearch={'Event'}
              items={items}
              setInput={setInput}
              setOpen={setOpen}
            />
          </Row>
        </div>
      )}
    </Container>
  )
}

export default SearchLookingFor
