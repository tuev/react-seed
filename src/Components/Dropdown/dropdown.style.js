import styled from 'styled-components'
import { ifProp } from 'styled-tools'

export const DropdownWrapper = styled.div`
  width: 100%;
  max-height: ${ifProp('show', '100vh', '0px')};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  background: white;
  box-shadow: 0 1px 17px 0 rgba(40, 44, 53, 0.1),
    0 2px 4px 0 rgba(40, 44, 53, 0.1);
  @media (min-width: 768px) {
    position: absolute;
  }
`

export const DropdownTitle = styled.div`
  &:hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.06);
  }

  background-color: ${ifProp('active', 'rgba(0, 0, 0, 0.06)')};
`
