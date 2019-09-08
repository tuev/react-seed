import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { isEmpty } from 'lodash'
import Authorization from 'Containers/Authorization'
import { withRouter } from 'react-router-dom'

const Avatar = ({ history }) => {
  const dispatch = useDispatch()
  const profile = useSelector((state = {}) => state.profile) || {}

  useEffect(
    () => {
      const isValidProfile = !isEmpty(profile.data)
      if (isValidProfile) {
        history.replace('/')
      }
    },
    [dispatch, history, profile, profile.data]
  )

  return <Authorization />
}

export default withRouter(Avatar)
