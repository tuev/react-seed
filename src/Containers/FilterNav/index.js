import React from 'react'
import { Container, Row } from 'reactstrap'
import FilterItem from 'Components/EventFilter'
import filterList from './FilterList'
import mockData from './mock'
import './filter.scss'

const renderFilterList = () =>
  filterList.map(({ filterType, ...restProps }, idx) => (
    <div key={idx} className='event-filter__item'>
      <FilterItem items={mockData[filterType]} {...restProps} />
    </div>
  ))

const FilterNav = () => (
  <Container className='position-relative'>
    <div className='event-filter'>
      <div className='event-filter__content d-flex'>
        <Row className='m-0'>{renderFilterList()}</Row>
      </div>
    </div>
  </Container>
)

export default FilterNav
