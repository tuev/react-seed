import { isArray, isString, union, get } from 'lodash'

const initPaginationState = {
  isFetching: false,
  skip: 0,
  limit: process.env.LIMIT_PAGE || 10,
  total: 0,
  ids: [],
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
    return {
      ...state,
      isFetching: false,
      skip: get(action, 'response.skip', 0),
      total: get(action, 'response.total', 0),
      ids: union(get(state, 'ids'), action.response.data)
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
