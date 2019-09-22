import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isEmpty, get } from 'lodash'

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
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <RedirectRoute />}
    />
  )
}
export default PrivateRoute
