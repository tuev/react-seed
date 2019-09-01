import React, { Component } from 'react'
import { Collapse, NavbarToggler, NavbarBrand, Nav } from 'reactstrap'
import { get } from 'lodash'
import HeaderConfigs from './header'
import HeaderDropdown from './HeaderDropdown'
import HeaderItem from './HeaderItem'
import { HeaderNav } from './header.style'

export default class Example extends Component {
  state = {
    isOpen: false
  }

  _toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    })

  _renderHeaderItem = (item, idx) => {
    const isDropdown = get(item, 'items')
    const childProps = { ...item, key: idx }
    return isDropdown ? (
      <HeaderDropdown {...childProps} />
    ) : (
      <HeaderItem {...childProps} />
    )
  }

  render () {
    const { isOpen } = this.state
    return (
      <div className='bg-white position-relative' style={{ zIndex: 2 }}>
        <HeaderNav color='light' light expand='md'>
          <NavbarBrand href='/'>JiptJipt</NavbarBrand>
          <NavbarToggler onClick={this._toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {HeaderConfigs.map(this._renderHeaderItem)}
              <HeaderItem label='Signin' href='/login' />
            </Nav>
          </Collapse>
        </HeaderNav>
      </div>
    )
  }
}
