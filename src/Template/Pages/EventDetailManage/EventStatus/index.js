import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeEventCreateDataHandler } from 'Redux/EventCreate/eventCreate.action'
import { get } from 'lodash'
import { FormControlLabel, Checkbox } from '@material-ui/core'

const StepController = ({ activeStep, handleBack, handleNext, steps }) => {
  const dispatch = useDispatch()

  const isPublish = useSelector(
    state => get(state, ['eventCreate', 'data', 'status']) === 'published'
  )

  const _handlePublishEvent = useCallback(
    () =>
      dispatch(
        changeEventCreateDataHandler({
          data: { status: isPublish ? 'draft' : 'published' }
        })
      ),
    [dispatch, isPublish]
  )

  return (
    <div className='d-flex justify-content-start'>
      <FormControlLabel
        control={
          <Checkbox
            checked={isPublish}
            onChange={_handlePublishEvent}
            value='status'
            color='primary'
          />
        }
        label='Publish Event'
      />
    </div>
  )
}

export default StepController
