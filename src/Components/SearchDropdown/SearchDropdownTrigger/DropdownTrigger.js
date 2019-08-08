import React from 'react'
import SelectTrigger from './SelectTrigger'
import InputTrigger from './InputTrigger'

const DropdownTrigger = ({ type, ...options }) => {
  switch (type) {
  case 'select':
    return <SelectTrigger {...options} />
  default:
    return <InputTrigger {...options} />
  }
}

export default DropdownTrigger
