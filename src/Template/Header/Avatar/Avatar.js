import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import { auth as firebaseAuth } from 'firebase/app'
import { useDispatch, useSelector } from 'react-redux'

import { pick, isEmpty } from 'lodash'
import { updateProfileInfo, signOut } from 'Redux/Profile/profile.action'
import useEventCallback from 'Hooks/useEventCallback'
import Authorization from 'Containers/Authorization'
import Dropdown from 'Components/Dropdown'
import Placeholder from './Placeholder'

import { NavItemText } from '../header.style'
import { Avatar as AvatarImage } from './Avatar.style'

const Avatar = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state = {}) => state.profile) || {}
  const isFetching = useSelector((state = {}) => state.profile.isFetching)
  const [signinFormVisible, toggleSigninForm] = useState(false)

  const handleToggleSigninForm = useEventCallback(
    isShow => toggleSigninForm(visible => !visible),
    []
  )

  useEffect(
    () => {
      firebaseAuth().onAuthStateChanged(async user => {
        if (user) {
          // User is signed in.
          const data = pick(user, ['displayName', 'email', 'photoURL', 'uid'])
          toggleSigninForm(false)

          await dispatch(
            updateProfileInfo({ data, endpoint: `oauth/${data.uid}` })
          )
        }
      })
    },
    [dispatch, handleToggleSigninForm]
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
            {/* {items.map((item = {}, idx) => (
              <HeaderItem {...item} key={`${label}_${idx}`} />
            ))} */}
            <NavItemText onClick={_signOut}>Logout</NavItemText>
          </div>
        </Dropdown>
      ) : (
        <NavItemText
          onClick={handleToggleSigninForm}
          className='d-block text-left'
        >
          Signin
        </NavItemText>
      )}
      <Modal
        isOpen={signinFormVisible}
        toggle={handleToggleSigninForm}
        centered
      >
        <ModalBody>
          <Authorization />
        </ModalBody>
      </Modal>
    </>
  )
}

export default Avatar
