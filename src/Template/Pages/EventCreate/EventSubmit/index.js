import React, { useMemo } from 'react'
import { useSpring, animated } from 'react-spring'
import { Button, Snackbar } from '@material-ui/core'
import { Row } from 'Components'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { get } from 'lodash'
import { postEventCreateHandler } from 'Redux/EventCreate/eventCreate.action'
import useAuthorizationRequest from 'Hooks/useAuthorizationRequest'

const EventSubmit = ({ values }) => {
  const isValid = useMemo(
    () => Object.keys(values).every(item => values[item]),
    [values]
  )

  const [_handleSubmit] = useAuthorizationRequest(postEventCreateHandler, {
    options: { data: values }
  })

  const isLoading = useSelector(state => get(state, 'eventCreate.isFetching'))
  const error = useSelector(state => get(state, 'eventCreate.error'))
  console.log(error)
  const props = useSpring({
    transform: isValid ? 'translateY(0)' : 'translateY(58px)',
    position: 'fixed',
    bottom: '0',
    background: 'white',
    width: '100%',
    left: 0,
    padding: '0 22%',
    zIndex: 2
  })

  return (
    <>
      <animated.div style={props}>
        <Row p='8px' display='flex' className='justify-content-end'>
          <Button
            color='primary'
            size='large'
            variant='contained'
            disabled={!isValid}
            onClick={_handleSubmit}
          >
            {isLoading && (
              <FontAwesomeIcon
                icon={faSpinner}
                spin
                size='xs'
                className='mr-2'
              />
            )}
            Submit
          </Button>
        </Row>
      </animated.div>
      <Snackbar
        open={!!error}
        message='Server error !'
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={500}
        variant='error'
      />
    </>
  )
}

export default EventSubmit
