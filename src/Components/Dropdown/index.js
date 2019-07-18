import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { DropdownWrapper, DropdownTitle } from './dropdown.style'

export default class Dropdown extends Component {
  state = {
    isOpen: false,
    width: 0
  }

  _showDropdown = () => this.setState({ isOpen: true })

  _hideDropdown = () => this.setState({ isOpen: false })

  _toggleDropdown = () => this.setState({ isOpen: !this.state.isOpen })

  componentDidMount () {
    this.setState({ width: window.innerWidth })
  }

  _handleMouseEnter = () => this.state.width > 768 && this._showDropdown()

  _handleMouseLeave = () => this.state.width > 768 && this._hideDropdown()

  render () {
    const { isOpen } = this.state
    const { header, caret, children, isNav } = this.props
    return (
      <div
        className='position-relative'
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={this._toggleDropdown}
      >
        <DropdownTitle
          className='d-flex align-items-center pr-2'
          active={isOpen ? 1 : 0}
        >
          {header}
          {caret && (
            <div
              style={{
                transform: `rotate(${isOpen ? '180deg' : '0'})`,
                transition: 'all 0.5s ease'
              }}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          )}
        </DropdownTitle>
        <DropdownWrapper show={isOpen} isNav={isNav}>
          {children}
        </DropdownWrapper>
      </div>
    )
  }
}
