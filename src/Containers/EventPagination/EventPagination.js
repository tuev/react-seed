import React, { useCallback } from 'react'
import AppPagination from 'Components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'
import { requestEventHandler } from 'Redux/Event/event.action'

const EventPagination = () => {
  const dispatch = useDispatch()
  const pagination = useSelector(state => {
    return get(state, 'event.data.pagination', {})
  })
  const total = get(pagination, 'total', 0)
  const skip = get(pagination, 'options.skip', 0)

  const _requestPage = useCallback(
    page => {
      const requestPage = async () => {
        dispatch(
          requestEventHandler({
            options: { params: { skip: page * process.env.REACT_APP_PAGE_LIMIT } }
          })
        )
      }
      requestPage()
    },
    [dispatch]
  )

  return <AppPagination skip={skip} total={total} onPageSelect={_requestPage} />
}

export default EventPagination
