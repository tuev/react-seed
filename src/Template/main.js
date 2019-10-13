import React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from 'Containers/PrivateRoute'
import Page404 from './Pages/404'
import pageConfigs from './pageConfigs'
import { MainWrapper } from './main.style'

const Main = () => {
  const _renderPage = () =>
    pageConfigs.map((route = {}, index) =>
      route.private ? (
        <PrivateRoute {...route} key={index} />
      ) : (
        <Route {...route} key={index} />
      )
    )

  return (
    <div className='position-relative'>
      <HashRouter>
        <MainWrapper className='container-fluid pt-0'>
          <Switch>
            {_renderPage()}
            <Route component={Page404} />
          </Switch>
        </MainWrapper>
      </HashRouter>
    </div>
  )
}

export default Main
