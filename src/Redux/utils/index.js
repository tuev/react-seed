// Reusable utility functions
const updateObject = (oldObject = {}, newValues = {}) => {
  return {
    ...oldObject,
    ...newValues
  }
}

const updateItemInArray = (
  array = [],
  itemId = '',
  updateItemCallback = () => true
) => array.map(item => (item.id !== itemId ? item : updateItemCallback(item)))

const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) =>
  handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action)
    : state

export { updateObject, updateItemInArray, createReducer }
