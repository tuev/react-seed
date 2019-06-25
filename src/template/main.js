import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Page404 from './pages/404'
import Header from './header'
import Footer from './footer'
import pageConfigs from './pageConfigs'
import { MainWrapper } from './main.style'

export default function main () {
  const _renderPage = () =>
    pageConfigs.map((route, index) => <Route {...route} key={index} />)
  return (
    <div className='position-relative'>
      <HashRouter>
        <Header />
        <MainWrapper className='container-fluid'>
          <Switch>
            {_renderPage()}
            <Route component={Page404} />
          </Switch>
        </MainWrapper>
        <Footer />
      </HashRouter>
    </div>
  )
}
