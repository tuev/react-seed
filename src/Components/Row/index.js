import styled from 'styled-components'
import { Row } from 'reactstrap'
import { space, layout, color, background, border, shadow, flexbox } from 'styled-system'

const AppRow = styled(Row)`
  ${space}
  ${layout}
  ${color}
  ${background}
  ${border}
  ${shadow}
  ${flexbox}
`

export default AppRow
