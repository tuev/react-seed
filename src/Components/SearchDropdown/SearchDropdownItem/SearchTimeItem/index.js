import React from 'react'
import { Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { get } from 'lodash'

const SearchTimeItem = ({ onClick, ...data }) => {
  const _onClick = e => onClick(data)
  return (
    <Row
      className='header-search__item py-2 align-items-center px-3'
      onClick={_onClick}
    >
      <div className='mr-2'>
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div>
        <span className='header-search__item--time'>{get(data, 'label')}</span>
      </div>
    </Row>
  )
}

export default SearchTimeItem
