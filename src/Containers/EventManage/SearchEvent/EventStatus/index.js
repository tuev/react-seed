import React, { useState, useCallback, useEffect } from 'react'
import { Col } from 'reactstrap'
import TextField from '@material-ui/core/TextField'
import { requestEventHandler } from 'Redux/Event/event.action'
import useAuthorizationRequest from 'Hooks/useAuthorizationRequest'

const defaultOptions = {
  status: { $ne: null },
  timeEnd: { $ne: null }
}

const statusItems = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Published',
    value: 'published'
  },
  {
    label: 'Draf',
    value: 'draft'
  },
  {
    label: 'Past',
    value: 'past'
  }
]

const _getQueryParams = status => {
  console.log(status, 'value')
  if (status === 'all') return defaultOptions
  if (['published', 'draft'].includes(status)) return { status }
  if (status === 'past') {
    return {
      timeEnd: {
        $lt: Date.now()
      }
    }
  }
}

const EventStatus = () => {
  const [value, setValue] = useState(statusItems[0].value)
  const handleChange = useCallback(e => setValue(e.target.value), [])

  const [handleSearch] = useAuthorizationRequest(
    requestEventHandler,
    {
      options: {
        params: {
          query: {
            ..._getQueryParams(value)
          }
        }
      }
    },
    { author: true }
  )

  useEffect(() => handleSearch(), [handleSearch, value])

  return (
    <Col md='4' sm='12'>
      <TextField
        id='outlined-select-currency-native'
        select
        label='Event status'
        className='events-manage__search--item'
        value={value}
        onChange={handleChange}
        SelectProps={{
          native: true
        }}
        margin='normal'
        variant='outlined'
      >
        {statusItems.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </Col>
  )
}

export default EventStatus
