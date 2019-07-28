import React from 'react'
import DropDown from 'Containers/DropdownSearch/index'
import DropDownSearchItem from './DropDownSearchItem'
import { NavItemText } from './dropDownRight.style'

export default ({ subject, items = [] }) => (
  <DropDown header={<NavItemText><h6>{subject}</h6></NavItemText>} caret>
    <div className='d-flex flex-column'>
      {items.map((item = {}, idx) => (
        <DropDownSearchItem {...item} key={`${subject}_${idx}`} />
      ))}
    </div>
  </DropDown>
)
