import styled from 'styled-components'
import { prop } from 'styled-tools'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'reactstrap'
import { COLOR_VARIABLES } from 'theme'

const navItemStyle = `
  font-size: 18px;
  font-weight: bold;
  padding: 1rem;
  color: ${COLOR_VARIABLES.primary};
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

export const HeaderNav = styled(Navbar)`
  @media screen and (min-width: 768px) {
    padding: 0 1rem;
  }
`

export const NavLinkWrapper = styled(NavLink)`
  ${navItemStyle}
  text-align: ${prop('align', 'left')};

  &:hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.06);
  }
`

export const NavItemText = styled.span`
  ${navItemStyle}
  cursor: pointer;
  &:hover {
    color: ${COLOR_VARIABLES.primaryBlack};
  }
`
