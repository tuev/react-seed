import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import { get } from 'lodash'
import useOnOutsideClick from 'Hooks/UseOnOutsideClick'
import DropdownList from './SearchDropdownList'
import DropdownTrigger from './SearchDropdownTrigger/DropdownTrigger'
import './searchDropdown.scss'

const SearchDropdown = ({
  title = '',
  dropdownItem,
  placeHolder = '',
  dropdownType = 'input',
  headerDropdown = '',
  searchType = 'event',
  items
}) => {
  const [isOpen, setOpen] = useState(false)
  const [value, setInput] = useState('')
  const { innerBorderRef } = useOnOutsideClick(() => setOpen(false))

  const _onSelect = item => {
    switch (searchType) {
    case 'event':
      setInput(get(item, 'title'))
      break
    case 'location':
      setInput(get(item, 'structured_formatting.main_text'))
      break
    case 'time':
    default:
      setInput(get(item, 'value'))
    }
    setOpen(false)
  }

  return (
    <Container className='search-looking-for'>
      <Row>
        <div>{title}</div>
      </Row>
      <Row>
        <div className='header-search__input-wrapper' onClick={setOpen}>
          <DropdownTrigger
            type={dropdownType}
            value={value}
            placeHolder={placeHolder}
            onChangeHandle={setInput}
            isOpen={isOpen}
          />
        </div>
      </Row>
      {isOpen && (
        <div ref={innerBorderRef}>
          <Row>
            <DropdownList
              dropdownItem={dropdownItem}
              title={headerDropdown}
              items={items}
              onMouseEnter={setInput}
              onClick={_onSelect}
              setOpen={setOpen}
            />
          </Row>
        </div>
      )}
    </Container>
  )
}

export default SearchDropdown
