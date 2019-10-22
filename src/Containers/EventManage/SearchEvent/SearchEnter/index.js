import React, { useState, useCallback, useEffect } from 'react'
import { Col } from 'reactstrap'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import { requestEventHandler } from 'Redux/Event/event.action'
import useAuthorizationRequest from 'Hooks/useAuthorizationRequest'

const SearchEnter = () => {
  const [keyWord, setEventKeyword] = useState('')
  const handleInputChange = useCallback(
    e => setEventKeyword(e.target.value),
    []
  )

  const [handleSearch] = useAuthorizationRequest(
    requestEventHandler,
    {
      options: {
        params: {
          query: {
            name: { $regex: keyWord, $options: 'i' }
          }
        }
      }
    },
    { author: true }
  )

  useEffect(
    () => {
      handleSearch()
    },
    [handleSearch, keyWord]
  )
  return (
    <Col md='4' sm='12'>
      <div className='events-manage__search--item events-manage__search--search-event'>
        <IconButton aria-label='search' className=''>
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder='Search event'
          className='input-enter'
          inputProps={{ 'aria-label': 'search event' }}
          value={keyWord}
          onChange={handleInputChange}
        />
      </div>
    </Col>
  )
}

export default SearchEnter
