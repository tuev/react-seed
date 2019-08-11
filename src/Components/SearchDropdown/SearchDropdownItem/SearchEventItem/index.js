import React from 'react'
import { Row, Col } from 'reactstrap'

import { connect } from 'react-redux'
import { chooseItemAction } from 'Redux/SearchEvent/search.action'
import './searchEventItem.scss'

const SearchEventItem = ({ onClick, onMouseEnter, getEvent, ...data }) => {
  const { image = '', alt = '', title = '', content = '', address = '' } = data
  const _onClick = e => getEvent(data)
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

const mapDispatchToProps = dispatch => ({
  getEvent: data => dispatch(chooseItemAction(data))
})

export default connect(
  null,
  mapDispatchToProps
)(SearchEventItem)
