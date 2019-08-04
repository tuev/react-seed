import React from 'react'
import { Row } from 'reactstrap'
import { get } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import './searchEventLocation.scss'

const SearchLocationItem = ({ onClick, onMouseEnter, ...data }) => {
  const _onClick = e => onClick(data)
  const _onMouseEnter = e =>
    onMouseEnter(get(data, 'structured_formatting.main_text'))

  return (
    <Row
      className='header-search__item align-items-center px-3'
      onClick={_onClick}
      onMouseEnter={_onMouseEnter}
    >
      <div className='mr-3'>
        <FontAwesomeIcon icon={faSearchLocation} />
      </div>
      <div>
        <div className='search-address__main'>
          {get(data, 'structured_formatting.main_text')}
        </div>
        <div className='search-address__sub-address'>
          {get(data, 'structured_formatting.secondary_text')}
        </div>
      </div>
    </Row>
  )
}

export default SearchLocationItem
