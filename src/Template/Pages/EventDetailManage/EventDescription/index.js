import React from 'react'
import { RTEditor } from 'Components'
import EventSection from 'Containers/EventBasicForm/EventSection'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { changeEventCreateDataHandler } from 'Redux/EventCreate/eventCreate.action'
import { get } from 'lodash'

const EventDescription = () => {
  const dispatch = useDispatch()
  const _onChange = data => {
    dispatch(changeEventCreateDataHandler({ data: { description: data } }))
  }

  const data = useSelector(state =>
    get(state, ['eventCreate', 'data', 'description'])
  )

  return (
    <div>
      <EventSection
        icon={faEdit}
        name='Event description'
        description='Event detail tell event-goers why they should come. Add
        details that highlight what makes it more details for follower. '
      >
        <RTEditor onChange={_onChange} data={data} />
      </EventSection>
    </div>
  )
}

export default EventDescription
