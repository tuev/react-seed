import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const InputClear = styled(FontAwesomeIcon)`
  padding: 2px;
  width: 15px !important;
  height: 15px;
  border: 1px solid white;
  border-radius: 50%;
  position: absolute;
  right: 17px;
  bottom: 29px;
  z-index: 2;
  cursor: pointer;
`

export const InputSearch = styled.input`
  // remove specific style in macos
  -webkit-appearance: none !important;
  background-color: transparent;
  background-image: none;
  border: 0 !important;
  border-bottom: 1px solid red !important;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  outline-color: transparent !important;
  outline-style: none;
  padding: 0;
  width: 100%;
`
