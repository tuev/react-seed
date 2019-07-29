import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import useOnOutsideClick from '../../Hooks/UseOnOutsideClick'
import OnDropdown from './DropdownList'

const OnLists = [
  'Today',
  'Tomorrow',
  'This weekend',
  'This week',
  'Next week',
  'This month',
  'Pick a date'
]

const SearchOn = () => {
  const [isOpen, setOpen] = useState(false)
  const [inputOn, setInputOn] = useState('Any date')
  const { innerBorderRef } = useOnOutsideClick(() => setOpen(false))

  return (
    <Container className='search-on'>
      <Row>
        <div>On</div>
      </Row>
      <Row>
        <div
          className='header-search__input-wrapper '
          onClick={() => setOpen(true)}
        >
          <Row>
            <Col xs='11' className='text-left pr-0 '>
              <div className=' input-search'>
                <span>{inputOn}</span>
              </div>
            </Col>
            <Col xs='1' className='px-0'>
              <div className=' input-search'>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </Col>
          </Row>
        </div>
      </Row>
      {isOpen && (
        <div ref={innerBorderRef}>
          <Row>
            <OnDropdown items={OnLists} setInputOn={setInputOn} />
          </Row>
        </div>
      )}
    </Container>
  )
}

export default SearchOn
