import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchList from './SearchList'
import SearchNav from './SearchNav'
import './search.scss'

const HeaderSearch = ({ locationSlug = '', items = [] }) => (
  <Container className='p-0'>
    <div className='header-search'>
      <div className='header-search__content'>
        <Row className='p-0 m-0'>
          <Col lg='11' md='12' className='p-0'>
            <Row className='p-0 m-0'>
              {SearchList.map((searchItem, idx) => (
                <SearchNav
                  key={idx}
                  keyIndex={idx}
                  countList={SearchList.length}
                  DropdownItem={searchItem.component}
                  locationSlug={locationSlug}
                  itemsEvent={items}
                  titleDropdown={searchItem.titleDropdown}
                  placeHolder={searchItem.placeHolder}
                  typeInput={searchItem.typeInput}
                  headerDropdown={searchItem.headerDropdown}
                  mouseEnterEvent={searchItem.mouseEnterEvent}
                  itemsTime={searchItem.itemsTime}
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
