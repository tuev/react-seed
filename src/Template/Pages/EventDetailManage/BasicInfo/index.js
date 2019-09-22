import React, { useCallback } from 'react'
import EventBasicForm from 'Containers/EventBasicForm'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'
import { EVENT_CREATE_CHANGE } from 'Redux/EventCreate/actionType'

const BasicInfo = () => {
  const dispatch = useDispatch()
  const basicInfoValue = useSelector(state =>
    get(state, ['eventCreate', 'data'])
  )
  const onChange = useCallback(
    propObj =>
      dispatch({
        type: EVENT_CREATE_CHANGE,
        payload: propObj
      }),
    [dispatch]
  )

  return <EventBasicForm values={basicInfoValue} onChange={onChange} />
}

export default BasicInfo
