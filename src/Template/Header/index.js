import React, { useState, useCallback, useEffect } from 'react'
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Modal,
  ModalBody
} from 'reactstrap'
import { auth as firebaseAuth } from 'firebase/app'

import { get } from 'lodash'
import Authorization from 'Containers/Authorization'
import HeaderConfigs from './header'
import HeaderDropdown from './HeaderDropdown'
import HeaderItem from './HeaderItem'
import { HeaderNav, NavItemText } from './header.style'

const Header = () => {
  const [dropdownVisible, toggleDropdown] = useState(false)
  const [signinFormVisible, toggleSigninForm] = useState(false)

  const _renderHeaderItem = useCallback((item, idx) => {
    const isDropdown = get(item, 'items')
    const childProps = { ...item, key: idx }
    return isDropdown ? (
      <HeaderDropdown {...childProps} />
    ) : (
      <HeaderItem {...childProps} />
    )
  }, [])

  const handleToggleDropdown = useCallback(
    () => toggleDropdown(visible => !visible),
    []
  )

  const handleToggleSigninForm = useCallback(
    () => toggleSigninForm(visible => !visible),
    []
  )

  useEffect(() => {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log(user, '------------------user info')
      } else {
        // No user is signed in.
      }
    })
  }, [])

  return (
    <div className='bg-white position-relative' style={{ zIndex: 2 }}>
      <HeaderNav color='light' light expand='md'>
        <NavbarBrand href='/'>JiptJipt</NavbarBrand>
        <NavbarToggler onClick={handleToggleDropdown} />
        <Collapse isOpen={dropdownVisible} navbar>
          <Nav className='ml-auto' navbar>
            {HeaderConfigs.map(_renderHeaderItem)}
            <NavItemText onClick={handleToggleSigninForm}>Signin</NavItemText>
          </Nav>
        </Collapse>
      </HeaderNav>
      <Modal
        isOpen={signinFormVisible}
        toggle={handleToggleSigninForm}
        centered
      >
        <ModalBody>
          <Authorization />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Header
