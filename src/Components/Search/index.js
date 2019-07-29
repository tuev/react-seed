import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchNav from './SearchNav'
import SearchLookingFor from '../SearchEventDropdown'
import SearchIn from '../SearchLocationDropdown'
import SearchOn from '../SearchTimeDropdown'
import './search.scss'

const searchList = [
  {
    component: SearchLookingFor
  },
  {
    component: SearchIn
  },
  {
    component: SearchOn
  }
]

const HeaderSearch = ({ locationSlug = '', items = [] }) => (
  <Container className='p-0'>
    <div className='header-search'>
      <div className='header-search__content'>
        <Row className='p-0 m-0'>
          <Col lg='11' md='12' className='p-0'>
            <Row className='p-0 m-0'>
              {searchList.map((searchItem, idx) => (
                <SearchNav
                  key={idx}
                  keyIndex={idx}
                  Dropdown={searchItem.component}
                  locationSlug={locationSlug}
                  items={items}
                  countList={searchList.length}
                />
              ))}
            </Row>
          </Col>
          <Col lg='1' md='12' className='px-0'>
            <div className='search__button'>
              <div className='search__button--content'>
                <div className='search__button--icon d-flex justify-content-center align-items-center'>
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </Container>
)

export default HeaderSearch
