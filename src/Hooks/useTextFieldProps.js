import { useCallback } from 'react'

const useTextFieldProps = ({ values, error, onChange }) => {
  const textFieldProps = useCallback(
    ({ id = '', label = '' }) => ({
      id,
      value: values[id],
      onChange: onChange(id),
      margin: 'normal',
      fullWidth: true,
      variant: 'outlined',
      required: true,
      label: error[id] || label,
      error: !!error[id]
    }),
    [error, onChange, values]
  )
  return textFieldProps
}

export default useTextFieldProps
