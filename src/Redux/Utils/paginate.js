import { isArray, isString, get } from 'lodash'

const initPaginationState = {
  isFetching: false,
  skip: 0,
  limit: process.env.REACT_APP_PAGE_LIMIT,
  total: 0,
  items: [],
  error: null
}

const updatePagination = ({ state = initPaginationState, action, types }) => {
  const [requestType, successType, failureType] = types
  switch (action.type) {
  case requestType:
    return {
      ...state,
      isFetching: true
    }
  case successType:
    const { data = [], ...responseInfo } = action || {}
    return {
      ...state,
      isFetching: false,
      skip: get(state, 'items.length', 0) + data.length,
      total: get(responseInfo, 'headers.x-total-count', 0),
      items: data
    }
  case failureType:
    return {
      ...state,
      isFetching: false
    }
  default:
    return state
  }
}

// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
const paginate = ({ types }) => {
  if (!isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(type => isString(type))) {
    throw new Error('Expected types to be strings.')
  }
  const [requestType, successType, failureType] = types

  return (state = {}, action) => {
    // Update pagination by key
    switch (action.type) {
    case requestType:
    case successType:
    case failureType:
      return {
        ...state,
        pagination: updatePagination({
          state: state.pagination,
          action,
          types
        })
      }
    default:
      return state
    }
  }
}

export default paginate
