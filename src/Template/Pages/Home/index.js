import React, { Component } from 'react'
import { isEmpty, get } from 'lodash'
import { connect } from 'react-redux'
import { requestEvent } from 'Redux/Event/event.action'
import { Nav } from 'reactstrap'
import EventList from 'Components/EventList'
import Search from 'Components/Search'
import eventData from './event'
import itemsDropDownData from './dropDown'
import DropDownSearchItem from './DropDownSearchItem'
import DropDownSearch from './DropDownSearch'
import { DropDownNav } from './dropDownRight.style'

class HomePage extends Component {
  _renderDropDownItem = (item, idx) => {
    const isDropdown = get(item, 'items')
    const childProps = { ...item, key: idx }
    return isDropdown ? (
      <DropDownSearch {...childProps} />
    ) : (
      <DropDownSearchItem {...childProps} />
    )
  }

  componentDidMount () {
    this.props.requestEvent({ endpoint: 'test' })
  }

  render () {
    const locationSlug = 'Ho Chi Minh City'
    const eventDataItem = eventData.reduce((acc, curVal) => {
      return acc.concat(curVal.items)
    }, [])

    return (
      <div>
        {!isEmpty(eventData) && (
          <Search locationSlug={locationSlug} items={eventDataItem} />
        )}

        <DropDownNav light expand='md'>
          <Nav className='ml-auto' navbar>
            {itemsDropDownData.map(this._renderDropDownItem)}
          </Nav>
        </DropDownNav>

        {!isEmpty(eventData) &&
          eventData.map((itemsList = {}, idx) => (
            <EventList key={idx} {...itemsList} />
          ))}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event } = state
  return event
}

export default connect(
  mapStateToProps,
  { requestEvent }
)(HomePage)
