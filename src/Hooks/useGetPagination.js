import { useSelector } from 'react-redux'
import { get } from 'lodash'

export const useGetPagination = paginateSelector => {
  const state = useSelector(state => {
    const {
      pagination: {
        skip = 0,
        limit = process.env.REACT_APP_PAGE_LIMIT,
        total = 0,
        items = []
      } = {}
    } = get(state, [paginateSelector, 'data'], {})
    return {
      skip,
      limit,
      total,
      items
    }
  })

  return state
}

export default useGetPagination
