import React, { useCallback, useMemo } from 'react'
import { auth as firebaseAuth } from 'firebase/app'
import { useDispatch, useSelector } from 'react-redux'

import { get, isEmpty } from 'lodash'
import { signOut } from 'Redux/Profile/profile.action'
import { withRouter } from 'react-router-dom'
import Dropdown from 'Components/Dropdown'
import Placeholder from './Placeholder'

import { NavItemText } from '../header.style'
import { Avatar as AvatarImage } from './Avatar.style'
import HeaderItem from '../HeaderItem'

const Avatar = ({ history, location }) => {
  const dispatch = useDispatch()
  const profile = useSelector((state = {}) => state.profile) || {}
  const isFetching = useSelector((state = {}) => state.profile.isFetching)

  const handleToggleSigninForm = useCallback(
    () => {
      const isLoginPage = get(location, 'pathname') === '/login'
      !isLoginPage && history.push('/login')
    },
    [history, location]
  )

  const isShowProfileAvatar = useMemo(() => !isEmpty(profile.data), [profile])
  const _signOut = useCallback(
    () => {
      const signout = async () => {
        try {
          await firebaseAuth().signOut()
          // signed out
          dispatch(signOut())
        } catch (e) {
          console.error(e)
        }
      }
      signout()
    },
    [dispatch]
  )

  return (
    <>
      {isFetching && <Placeholder />}
      {isShowProfileAvatar ? (
        <Dropdown
          header={
            <div className='d-flex align-items-center p-3'>
              <AvatarImage url={profile.data.photoURL} />
              <div>
                <span>{profile.data.displayName}</span>
              </div>
            </div>
          }
          caret
        >
          <div className='d-flex flex-column'>
            <HeaderItem label='Manage Events' href='/manage' />
            <HeaderItem label='Create Event' href='/create' />
            <NavItemText onClick={_signOut} className='text-left'>
              Logout
            </NavItemText>
          </div>
        </Dropdown>
      ) : (
        <NavItemText
          onClick={handleToggleSigninForm}
          className='d-block text-left'
        >
          Sign in
        </NavItemText>
      )}
    </>
  )
}

export default withRouter(Avatar)
