import React from 'react'
import { auth as firebaseAuth } from 'firebase/app'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateProfileInfo } from 'Redux/Profile/profile.action'
import { pick } from 'lodash'

const Authorization = ({ history, location }) => {
  const dispatch = useDispatch()
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebaseAuth.GoogleAuthProvider.PROVIDER_ID,
      firebaseAuth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: async (info = {}) => {
        const data = pick(info.user, [
          'displayName',
          'email',
          'photoURL',
          'uid'
        ])
        await dispatch(updateProfileInfo({ data, endpoint: `oauth/${data.uid}` }))
        if (location.pathname === 'login') {
          history.back()
        }
      }
    }
  }
  console.log('render author')
  return (
    <div className='d-flex justify-content-center align-items-center flex-column p-4'>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth()} />
    </div>
  )
}

export default withRouter(Authorization)
