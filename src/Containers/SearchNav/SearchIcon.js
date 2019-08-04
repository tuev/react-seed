import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// todo: redirect to search page when click to this item
export default function SearchIcon () {
  return (
    <div className='search__button'>
      <div className='search__button--content'>
        <div className='search__button--icon d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  )
}
