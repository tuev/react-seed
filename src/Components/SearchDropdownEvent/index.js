import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import useOnOutsideClick from '../../Hooks/UseOnOutsideClick'
import DropdownList from '../SearchDropdownList'

const SearchEvent = ({
  itemsEvent = [],
  titleDropdown = '',
  DropdownItem,
  placeHolder = '',
  typeInput = '',
  headerDropdown = '',
  mouseEnterEvent = false,
  itemsTime = []
}) => {
  const [isOpen, setOpen] = useState(false)
  const [inputVal, setInput] = useState('')
  const { innerBorderRef } = useOnOutsideClick(() => setOpen(false))
  const itemsAddress = itemsEvent.map(item => item.address)

  return (
    <Container className='search-looking-for'>
      <Row>
        <div>{titleDropdown}</div>
      </Row>
      <Row>
        <div
          className='header-search__input-wrapper'
          onClick={() => setOpen(true)}
        >
          {titleDropdown === 'Looking for' || titleDropdown === 'In' ? (
            <input
              className='input-search'
              type='search'
              placeholder={placeHolder}
              value={inputVal}
              readOnly
            />
          ) : (
            <Row>
              <Col xs='11' className='text-left pr-0 '>
                <div className=' input-search'>
                  <span>{inputVal || placeHolder}</span>
                </div>
              </Col>
              <Col xs='1' className='px-0'>
                <div className=' input-search'>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </Col>
            </Row>
          )}
        </div>
      </Row>
      {isOpen && (
        <div ref={innerBorderRef}>
          <Row>
            <DropdownList
              DropdownItem={DropdownItem}
              headerDropdown={headerDropdown}
              items={
                titleDropdown === 'Looking for'
                  ? itemsEvent
                  : titleDropdown === 'In'
                    ? itemsAddress
                    : itemsTime
              }
              mouseEnterEvent={mouseEnterEvent}
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
