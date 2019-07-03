import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'
import { HeaderWrapper, NavLinkWrapper } from './header.style'

export default class Example extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <HeaderWrapper>
        <Navbar color='light' light expand='md'>
          <NavbarBrand to='/'>JiptJipt</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLinkWrapper to='/login'>Login</NavLinkWrapper>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </HeaderWrapper>
    )
  }
}
