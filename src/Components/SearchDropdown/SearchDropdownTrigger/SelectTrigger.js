import React from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { SelectSearch } from './SelectTrigger.style'

const SelectTrigger = ({ value, placeHolder, isOpen, triggerOpen }) => {
  return (
    <Row onClick={triggerOpen}>
      <Col xs='11' className='text-left pr-0 '>
        <SelectSearch>
          <span>{value || placeHolder}</span>
        </SelectSearch>
      </Col>
      <Col xs='1' className='px-0'>
        <div
          style={{
            transform: `rotate(${isOpen ? '180deg' : '0'})`,
            transition: 'all 0.5s ease'
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </Col>
    </Row>
  )
}

export default SelectTrigger
