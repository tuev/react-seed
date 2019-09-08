import React from 'react'
import styled from 'styled-components'
import { space, typography, color, layout } from 'styled-system'
import TextField from '@material-ui/core/TextField'
import { Field } from 'redux-form'

export const TextInputWrapper = styled(TextField)`
 ${space};
  ${typography}
  ${color}
  ${layout}
`

const renderTextInput = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    label={label}
    {...input}
    {...custom}
  />
)

export const AppReduxFieldInput = ({ props, name, label }) => (
  <Field name={name} component={renderTextInput} label={label} props={props} />
)

export default AppReduxFieldInput
