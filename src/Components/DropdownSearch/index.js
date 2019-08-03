import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import DropDownNav from './DropDownNav'
import DropdownTime from '../DropdownTime'
import DropdownPrice from '../DropdownPrice'
import DropdownCategory from '../DropdownCategory'
import './dropdown.scss'

const searchList = [
  {
    component: DropdownTime
  },
  {
    component: DropdownPrice
  },
  {
    component: DropdownCategory
  }
]

const DropDownSearch = () => (
  <Container className='d-flex flex-row-reverse bd-highlight'>
    <div className='header-search'>
      <div className='header-search__content'>
        <Row className='p-0 m-0'>
          <Col lg='12' md='12' className='p-0'>
            <Row className='p-0 m-0'>
              {searchList.map((searchItem, idx) => (
                <DropDownNav
                  key={idx}
                  keyIndex={idx}
                  Dropdown={searchItem.component}
                  countList={searchList.length}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  </Container>
)

export default DropDownSearch
