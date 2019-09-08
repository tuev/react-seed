import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl'

import { space, layout, color, background, border, shadow } from 'styled-system'

const AppForm = styled(FormControl)`
  ${space}
  ${layout}
  ${color}
  ${background}
  ${border}
  ${shadow}
`

export default AppForm
