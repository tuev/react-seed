import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isEmpty, get } from 'lodash'
import Loading from 'Template/Pages/Loading'

const RedirectRoute = props => (
  <Redirect
    to={{
      pathname: '/login',
      state: { from: props.location }
    }}
  />
)

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(
    state => !isEmpty(get(state, 'profile.data'))
  )
  const isLoading = useSelector(state => get(state, 'profile.isFetching'))
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
