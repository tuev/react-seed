import React from 'react'
import { Row, Col } from 'reactstrap'
import './searchEventItem.scss'

const SearchEventItem = ({ onClick, onMouseEnter, ...data }) => {
  const { image = '', alt = '', title = '', content = '', address = '' } = data
  const _onClick = e => onClick(data)
  const _onMouseEnter = e => onMouseEnter(title)
  return (
    <div onClick={_onClick} onMouseEnter={_onMouseEnter}>
      <Row className='header-search__item'>
        <Col xs='3' className='d-flex align-self-center pr-0'>
          <div>
            <img src={image} alt={alt} className='event-search__image' />
          </div>
        </Col>
        <Col>
          <div className='d-flex flex-column justify-content-start align-items-start '>
            <p className='event-search__title'>{title}</p>
            <p className='event-search__content'>{content}</p>
            <p className='event-search__address'>{address}</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default SearchEventItem
