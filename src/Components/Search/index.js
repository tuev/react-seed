import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchLookingFor from '../SearchLookingFor'
import SearchIn from '../SearchIn'
import SearchOn from '../SearchOn'
import './search.scss'

const HeaderSearch = ({ locationSlug = '', items = [] }) => (
  <Container className='p-0'>
    <div className='header-search'>
      <div className='header-search__content'>
        <Row className='p-0 m-0'>
          <Col lg='11' md='12' className='p-0'>
            <Row className='p-0 m-0'>
              <Col lg='4' md='12' className='p-0'>
                <div className='search__item'>
                  <SearchLookingFor items={items} />
                </div>
              </Col>
              <Col lg='4' md='12' className='p-0'>
                <div className='search__item'>
                  <SearchIn locationSlug={locationSlug} items={items} />
                </div>
              </Col>
              <Col lg='4' md='12' className='p-0'>
                <div className='search__item border-right-0'>
                  <SearchOn />
                </div>
              </Col>
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
