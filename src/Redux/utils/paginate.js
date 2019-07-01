import { isArray, isString, isFunction, union, get } from 'lodash'

const initPaginationState = {
  isFetching: false,
  skip: 0,
  limit: process.env.LIMIT_PAGE || 10,
  total: 0,
  ids: [],
  error: null
}

const updatePagination = ([requestType, successType, failureType]) => (
  state = initPaginationState,
  action
) => {
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
      ids: union(state.ids, action.response.data)
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
const paginate = ({ types, mapActionToKey }) => {
  if (!isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(type => isString(type))) {
    throw new Error('Expected types to be strings.')
  }
  if (!isFunction(mapActionToKey)) {
    throw new Error('Expected mapActionToKey to be a function.')
  }

  const [requestType, successType, failureType] = types

  return (state = {}, action) => {
    // Update pagination by key
    switch (action.type) {
    case requestType:
    case successType:
    case failureType:
      const key = mapActionToKey(action) || 'pagination'
      if (!isString(key)) {
        throw new Error('Expected key to be a string.')
      }
      return {
        ...state,
        [key]: updatePagination(types)(state[key], action)
      }
    default:
      return state
    }
  }
}

export default paginate
