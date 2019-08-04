import React from 'react'
import DropdownEvent from 'Components/SearchDropdown'
import { Container, Row, Col } from 'reactstrap'
import SearchIcon from './SearchIcon'
import searchList from './searchList'
import './search.scss'
import mockData from './mock'

const renderSearchList = (searchList, searchListColDiv) =>
  searchList.map(({ component, searchType, ...restProps }, idx) => (
    <Col
      lg={searchListColDiv}
      md='12'
      className='p-0 search__wrapper'
      key={idx}
    >
      <div className='search__item'>
        <DropdownEvent
          dropdownItem={component}
          {...restProps}
          searchType={searchType}
          items={mockData[searchType]}
        />
      </div>
    </Col>
  ))

const HeaderSearch = props => {
  let listRender = searchList
  // Making sure no more than 5 item search in searchNav
  if (searchList.length > 4) {
    listRender = searchList.slice(3)
  }
  const searchListColDiv = 12 / listRender.length

  return (
    <Container className='p-0'>
      <div className='header-search'>
        <div className='header-search__content'>
          <Row className='p-0 m-0'>
            <Col lg='11' md='12' className='p-0'>
              <Row className='p-0 m-0'>
                {renderSearchList(listRender, searchListColDiv)}
              </Row>
            </Col>
            <Col lg='1' md='12' className='px-0'>
              <SearchIcon />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default HeaderSearch
