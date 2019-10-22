import React, { useMemo, useCallback, useState, useEffect } from 'react'
import { TablePagination } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { get } from 'lodash'
import { requestEventHandler } from 'Redux/Event/event.action'
import useAuthorizationRequest from 'Hooks/useAuthorizationRequest'

const EventPagination = () => {
  const [pageNumber, togglePage] = useState(0)
  const paginationData = useSelector(state =>
    get(state, 'event.data.pagination')
  )
  const total = useMemo(() => get(paginationData, 'total'), [paginationData])
  const skip = get(paginationData, 'options.skip', 0)
  const limit = get(paginationData, 'options.limit', 9)
  const page = useMemo(() => skip / limit, [limit, skip])
  const [_getEventData] = useAuthorizationRequest(
    requestEventHandler,
    { options: { params: { skip: +pageNumber * limit, limit } } },
    { author: true }
  )

  const handlePageChange = useCallback((e, page) => togglePage(page), [])

  useEffect(
    () => {
      _getEventData()
    },
    [_getEventData, pageNumber]
  )

  return (
    <TablePagination
      component='div'
      count={+total}
      rowsPerPage={10}
      rowsPerPageOptions={[10]}
      page={page}
      backIconButtonProps={{
        'aria-label': 'previous page'
      }}
      nextIconButtonProps={{
        'aria-label': 'next page'
      }}
      onChangePage={handlePageChange}
    />
  )
}

export default EventPagination
