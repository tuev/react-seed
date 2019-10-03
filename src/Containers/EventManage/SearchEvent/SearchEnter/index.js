import React from 'react'
import { Col } from 'reactstrap'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'

const SearchEnter = () => {
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
        />
      </div>
    </Col>
  )
}

export default SearchEnter
