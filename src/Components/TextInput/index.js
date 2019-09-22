import styled from 'styled-components'
import { space, typography, color, layout } from 'styled-system'
import TextField from '@material-ui/core/TextField'

export const TextInputWrapper = styled(TextField)`
 ${space};
  ${typography}
  ${color}
  ${layout}
`

export default TextInputWrapper
