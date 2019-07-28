import React from 'react'
import DropDown from 'Containers/DropDownSearch/index'
import DropDownSearchItem from './DropDownSearchItem'
import { NavItemText } from './dropDownRight.style'

export default ({ subject, items = [] }) => (
  <DropDown header={<NavItemText>{subject}</NavItemText>} caret>
    <div className='d-flex flex-column'>
      {items.map((item = {}, idx) => (
        <DropDownSearchItem {...item} key={`${subject}_${idx}`} />
      ))}
    </div>
  </DropDown>
)
