import React, { useState, useCallback } from 'react'
import { Collapse, NavbarToggler, NavbarBrand, Nav } from 'reactstrap'

import { get } from 'lodash'
import HeaderConfigs from './header'
import HeaderDropdown from './HeaderDropdown'
import HeaderItem from './HeaderItem'
import { HeaderNav } from './header.style'
import Avatar from './Avatar'

const Header = () => {
  const [dropdownVisible, toggleDropdown] = useState(false)

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

  return (
    <div className='bg-white position-relative' style={{ zIndex: 2 }}>
      <HeaderNav color='light' light expand='md'>
        <NavbarBrand href='/'>
          <img
            width='80px'
            height='80px'
            src='https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/67493615_2018026911634922_2690227270647283712_n.jpg?_nc_cat=111&cachebreaker=sd&_nc_eui2=AeHGoykkMo33oFXr_urrk1LduDrTdE-Nw4BCmgMnZN8LQ24_iWPUa--Hs-j1Ltv73zL1KT8H4j3QH_KqNC1v-gesz25At3gDqcl2PNQK4hMrKA&_nc_oc=AQlYHk3A4fnWlKh-1fAOJZAjSaBHdcBKAF8g_o_qXAH1y4kr_XFq9lHFqJ8I2AYkceQ&_nc_ht=scontent.fsgn3-1.fna&oh=ec24892d11a811a515f51bf21fd3d27d&oe=5E1FA51F'
            alt='Logo'
          />
        </NavbarBrand>
        <NavbarToggler onClick={handleToggleDropdown} />
        <Collapse isOpen={dropdownVisible} navbar>
          <Nav className='ml-auto' navbar>
            {HeaderConfigs.map(_renderHeaderItem)}
          </Nav>
          <Avatar />
        </Collapse>
      </HeaderNav>
    </div>
  )
}

export default Header
