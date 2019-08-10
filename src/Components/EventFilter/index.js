import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'
import FilterItem from './EventFilterItem'
import './eventFilter.scss'

export default class Example extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dropdownOpen: false,
      value: ''
    }
  }

  _toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  _setInput = (val) => {
    this.setState((state) => {
      return { value: val }
    })
  }

  render () {
    const { items, placeHolder } = this.props
    const { value } = this.state

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this._toggle}>
        <DropdownToggle caret className='event-filter__input'>
          {value || placeHolder}
        </DropdownToggle>
        <DropdownMenu>
          <FilterItem items={items} setInput={this._setInput} />
        </DropdownMenu>
      </Dropdown>
    )
  }
}
