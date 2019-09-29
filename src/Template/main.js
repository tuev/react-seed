import React, { useEffect } from 'react'
import { auth as firebaseAuth } from 'firebase/app'
import { useDispatch, useSelector } from 'react-redux'

import { pick, isEmpty } from 'lodash'
import { updateProfileInfo, signOut } from 'Redux/Profile/profile.action'
import { HashRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from 'Containers/PrivateRoute'
import Page404 from './Pages/404'
import Header from './Header'
// import Footer from './Footer'
import pageConfigs from './pageConfigs'
import { MainWrapper } from './main.style'
import Loading from './Pages/Loading'

const Main = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state = {}) => state.profile.data)

  const isFetching = useSelector((state = {}) => state.profile.isFetching)
  const _renderPage = () =>
    pageConfigs.map((route = {}, index) =>
      route.private ? (
        <PrivateRoute {...route} key={index} />
      ) : (
        <Route {...route} key={index} />
      )
    )
  useEffect(
    () => {
      if (isEmpty(profile)) {
        console.log('login')
        firebaseAuth().onAuthStateChanged(async user => {
          if (user) {
            // User is signed in.
            const data = pick(user, ['displayName', 'email', 'photoURL', 'uid'])

            await dispatch(
              updateProfileInfo({ data, endpoint: `oauth/${data.uid}` })
            )
          } else {
            dispatch(signOut())
          }
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  return isFetching ? (
    <Loading />
  ) : (
    <div className='position-relative'>
      <HashRouter>
        <Header />
        <MainWrapper className='container-fluid pt-0'>
          <Switch>
            {_renderPage()}
            <Route component={Page404} />
          </Switch>
        </MainWrapper>
        {/* <Footer /> */}
      </HashRouter>
    </div>
  )
}

export default Main
