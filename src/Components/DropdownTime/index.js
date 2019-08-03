import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import useOnOutsideClick from '../../Hooks/UseOnOutsideClick'
import DropdownList from '../DropdownList'
import DropdownItem from './DropDownTimeItem'

const OnLists = [
  'Today',
  'Tomorrow',
  'This weekend',
  'This week',
  'Next week',
  'This month',
  'Pick a date'
]

const DropDownTime = () => {
  const [isOpen, setOpen] = useState(false)
  const [inputOn, setInput] = useState('Any date')
  const { innerBorderRef } = useOnOutsideClick(() => setOpen(false))

  return (
    <Container className='search-on'>
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
            <DropdownList
              DropdownItem={DropdownItem}
              headerDropdown={'Any date'}
              items={OnLists}
              setInput={setInput}
              setOpen={setOpen}
            />
          </Row>
        </div>
      )}
    </Container>
  )
}

export default DropDownTime