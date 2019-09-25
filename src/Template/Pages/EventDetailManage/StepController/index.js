import React, { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { updateEventCreateHandler } from 'Redux/EventCreate/eventCreate.action'
import useAuthorizationRequest from 'Hooks/useAuthorizationRequest'
import { get, keys } from 'lodash'
import { Button } from '@material-ui/core'

const _calculateForm = values => {
  const form = new FormData()
  keys(values).forEach(i => form.append(i, values[i]))
  return form
}

const StepController = ({ activeStep, handleBack, handleNext, steps }) => {
  const values = useSelector(state => get(state, ['eventCreate', 'data']))
  const isLoading = useSelector(state => get(state, 'eventCreate.isFetching'))
  const isPublish = useSelector(state => values.status === 'published')
  const formData = useMemo(() => _calculateForm(values), [values])
  const [_handleSubmit] = useAuthorizationRequest(updateEventCreateHandler, {
    options: { data: formData },
    id: values._id
  })

  const [_handlePublish] = useAuthorizationRequest(updateEventCreateHandler, {
    options: { data: { status: isPublish ? 'draft' : 'published' } },
    id: values._id
  })

  return (
    <div
      className='position-fixed d-flex justify-content-end align-items-center'
      style={{
        bottom: 0,
        left: 0,
        background: 'white',
        padding: '16px 32px',
        width: '100%',
        height: 70,
        boxShadow: '0 8px 20px -9px rgba(0, 0, 0, 0.3)'
      }}
    >
      {activeStep !== 0 && (
        <div style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            size='lg'
            className='mx-2'
            onClick={handleBack}
          />
        </div>
      )}
      {activeStep !== steps.length - 1 && (
        <div style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            size='lg'
            className='mx-2'
            onClick={handleNext}
          />
        </div>
      )}
      {activeStep === steps.length - 1 && (
        <Button
          color='primary'
          size='large'
          variant='contained'
          onClick={_handleSubmit}
          className='mx-3'
        >
          {isLoading && (
            <FontAwesomeIcon icon={faSpinner} spin size='xs' className='mr-2' />
          )}
          Submit
        </Button>
      )}
      {activeStep === steps.length - 1 && (
        <Button size='large' variant='contained' onClick={_handlePublish}>
          {isLoading && (
            <FontAwesomeIcon icon={faSpinner} spin size='xs' className='mr-2' />
          )}
          {!isPublish ? 'Publish' : 'Unpublish'}
        </Button>
      )}
    </div>
  )
}

export default StepController
