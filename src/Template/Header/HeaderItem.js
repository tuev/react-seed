import React from 'react'
import { NavLinkWrapper } from './header.style'

export default ({ label, href = '' }) => (
  <NavLinkWrapper to={href}>{label}</NavLinkWrapper>
)
