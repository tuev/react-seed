import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty, get } from 'lodash'
import Loading from 'Template/Pages/Loading'
import { signOut } from 'Redux/Profile/profile.action'

const RedirectRoute = props => (
  <Redirect
    to={{
      pathname: '/login',
      state: { from: props.location }
    }}
  />
)

const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(
    state => !isEmpty(get(state, 'profile.data'))
  )
  const isLoading = useSelector(state => get(state, 'profile.isFetching'))

  useEffect(
    () => {
      setTimeout(() => {
        if (!isAuthenticated && isLoading) {
          dispatch(signOut())
        }
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return !isLoading ? (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <RedirectRoute />}
    />
  ) : (
    <Loading />
  )
}

export default PrivateRoute
