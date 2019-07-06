import React from 'react'
import Dropdown from 'Components/Dropdown'
import HeaderItem from './HeaderItem'
import { NavItemText } from './header.style'

export default ({ label, items = [] }) => (
  <Dropdown header={<NavItemText>{label}</NavItemText>} caret>
    <div className='d-flex flex-column'>
      {items.map((item = {}, idx) => (
        <HeaderItem {...item} key={`${label}_${idx}`} />
      ))}
    </div>
  </Dropdown>
)
