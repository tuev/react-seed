import React, { useMemo, useCallback, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'
import { EVENT_REQUIRED_FIELDS } from 'Config/constant'
import { useSelector } from 'react-redux'
import { updateEventCreateHandler } from 'Redux/EventCreate/eventCreate.action'
import useAuthorizationRequest from 'Hooks/useAuthorizationRequest'
import { get, keys, isEmpty } from 'lodash'
import { Button, Snackbar } from '@material-ui/core'
import './step-controller.scss'

const _calculateForm = values => {
  const form = new FormData()
  keys(values).forEach(i => {
    const value = get(values[i], '_id', values[i])
    form.append(i, value)
  })
  return form
}

const _getErrorMessage = (items = []) => {
  return items.map((item, index) =>
    index === items.length - 1 ? item : `${item}`
  )
}

const StepController = ({ activeStep, handleBack, handleNext, steps }) => {
  const values = useSelector(state => get(state, ['eventCreate', 'data']))
  const isLoading = useSelector(state => get(state, 'eventCreate.isFetching'))

  const [error, toggleError] = useState(false)

  const formData = useMemo(() => _calculateForm(values), [values])
  const [_submitEvent] = useAuthorizationRequest(updateEventCreateHandler, {
    options: { data: formData },
    id: values._id
  })

  const isInvalid = useMemo(
    () => EVENT_REQUIRED_FIELDS.some(item => !values[item]),
    [values]
  )

  const _handleSubmit = useCallback(
    () => {
      if (isInvalid) {
        return toggleError(EVENT_REQUIRED_FIELDS.filter(item => !values[item]))
      }
      _submitEvent()
    },
    [_submitEvent, isInvalid, values]
  )

  const errorMessage = useMemo(
    () => (isEmpty(error) ? '' : `Please fill ${_getErrorMessage(error)}`),
    [error]
  )

  useEffect(
    () => {
      setTimeout(() => error && toggleError(false), 2000)
    },
    [error]
  )

  return (
    <div className='step-controller__wrapper'>
      {activeStep !== 0 && (
        <div style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            size='2px'
            className='mx-2 fa-2x'
            onClick={handleBack}
          />
        </div>
      )}
      {activeStep !== steps.length - 1 && (
        <div style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            size='2px'
            className='mx-2 fa-2x'
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
      <Snackbar
        variant='error'
        message={errorMessage}
        open={!!error}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </div>
  )
}

export default StepController
