import React from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { InputSearch, InputClear } from './InputTrigger.styled'

const InputTrigger = ({ placeHolder, value, onChangeHandle }) => {
  const _onChange = e => onChangeHandle(e.target.value)
  const _onClear = e => onChangeHandle('')
  return (
    <>
      <InputSearch
        type='search'
        placeholder={placeHolder}
        value={value}
        onChange={_onChange}
      />
      {value && <InputClear icon={faTimes} onClick={_onClear} />}
    </>
  )
}

export default InputTrigger
