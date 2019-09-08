import styled from 'styled-components'
import { Col } from 'reactstrap'
import {
  space,
  layout,
  color,
  background,
  border,
  shadow,
  flexbox
} from 'styled-system'

const AppCol = styled(Col)`
  ${space}
  ${layout}
  ${color}
  ${background}
  ${border}
  ${flexbox}
  ${shadow}
`

export default AppCol
