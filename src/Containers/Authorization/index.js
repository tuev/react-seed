import React from 'react'
import { auth as firebaseAuth } from 'firebase/app'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { withRouter } from 'react-router-dom'
import { Card } from 'reactstrap'

const Authorization = () => {
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
      signInSuccessWithAuthResult: async info => {
        console.log(info, 'info -------------')
      }
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <Card className='p-3'>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth()} />
      </Card>
    </div>
  )
}

export default withRouter(Authorization)
