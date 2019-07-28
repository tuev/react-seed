import React from 'react'
import { NavLinkWrapper } from './dropDownRight.style'

export default ({ label, href = '' }) => (
  <NavLinkWrapper to={href}>{label}</NavLinkWrapper>
)
