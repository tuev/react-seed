import React, { useEffect } from 'react'
import AppSlider from 'Components/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'
import { requestUserHandler } from 'Redux/User/user.action'
import mockData from 'Redux/User/mock.json'

const EventMember = () => {
  const dispatch = useDispatch()
  const users = useSelector(
    state => get(state, 'user.pagination.items', mockData),
    []
  )

  useEffect(
    () => {
      const requestUser = async () => {
        await dispatch(requestUserHandler())
      }
      requestUser()
    },
    [dispatch]
  )
  return <AppSlider title='Most activities charities' items={users} />
}

export default EventMember
