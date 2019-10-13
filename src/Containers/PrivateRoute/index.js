import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
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
  const isAuthenticated = true
  const isLoading = false

  useEffect(
    () => {
      setTimeout(() => {
        if (!isAuthenticated && isLoading) {
          // do signout()
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
