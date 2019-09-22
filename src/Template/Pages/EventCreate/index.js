import React, { useReducer, useCallback, useEffect } from 'react'
import EventBasicForm from 'Containers/EventBasicForm'
import { Container } from 'reactstrap'
import moment from 'moment'
import { clearData } from 'Redux/EventCreate/eventCreate.action'
import { useDispatch } from 'react-redux'
import EventSubmit from './EventSubmit'
import eventReducer from './eventReducer'
import { EVENT_CHANGE } from './eventActionType'

const EventCreate = () => {
  const globalDispatch = useDispatch()
  const [values, dispatch] = useReducer(eventReducer, {
    name: '',
    type: 'tour',
    category: 'charity',
    organizer: '',
    addressType: 'revenue',
    address: '',
    timeStart: new Date(),
    timeEnd: moment().add('1', 'y')
  })
  const onChange = useCallback(
    propObj =>
      dispatch({
        type: EVENT_CHANGE,
        payload: propObj
      }),
    []
  )
  useEffect(() => {
    globalDispatch(clearData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Container>
        <EventBasicForm values={values} onChange={onChange} />
      </Container>
      <EventSubmit values={values} />
    </>
  )
}

export default EventCreate
