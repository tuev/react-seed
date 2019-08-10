import React from 'react'
import { Container } from 'reactstrap'
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
      <div className='d-flex justify-content-end'>
        {renderFilterList()}
      </div>
    </div>
  </Container>
)

export default FilterNav
