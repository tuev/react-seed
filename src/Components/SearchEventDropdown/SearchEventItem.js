import React from 'react'
import { Row, Col } from 'reactstrap'
import isEmpty from 'lodash'

const SearchEventItem = ({
  image = '',
  alt = '',
  title = '',
  content = '',
  address = ''
}) => {
  console.log(title)
  return !isEmpty(title) && (
    <div>
      <Row className='header-search__item'>
        <Col xs='3' className='d-flex align-self-center pr-0'>
          <div>
            <img src={image} alt={alt} className='header-search__item--image' />
          </div>
        </Col>
        <Col>
          <div className='d-flex flex-column justify-content-start align-items-start '>
            <p className='header-search__item--title'>{title}</p>
            <p className='header-search__item--content'>{content}</p>
            <p className='header-search__item--address'>{address}</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default SearchEventItem
