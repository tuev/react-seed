import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

export const NavLinkWrapper = styled(NavLink)`
  font-size: 18px;
  font-weight: bold;
`
