import styled from 'styled-components'
import { Col } from 'reactstrap'
import {
  space,
  layout,
  color,
  background,
  border,
  shadow,
  flexbox,
  typography
} from 'styled-system'

const AppCol = styled(Col)`
  ${space}
  ${layout}
  ${color}
  ${background}
  ${border}
  ${flexbox}
  ${shadow}
  ${typography}
`

export default AppCol
