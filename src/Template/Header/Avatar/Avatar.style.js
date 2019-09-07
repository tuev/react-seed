import styled from 'styled-components'
import { prop } from 'styled-tools'

const Avatar = styled.div`
  background-image: url(${prop('url')});
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: 0 12px;
`

export { Avatar }
