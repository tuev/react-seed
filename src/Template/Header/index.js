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
        <NavbarBrand href='/'>JiptJipt</NavbarBrand>
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
