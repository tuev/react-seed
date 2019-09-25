import React, { useEffect } from 'react'
import Stepper from '@material-ui/core/Stepper'
import useAuthorizationRequest from 'Hooks/useAuthorizationRequest'
import { Step, StepLabel, StepContent, Divider } from '@material-ui/core'
import { Container } from 'reactstrap'
import { requestEventCreateHandler } from 'Redux/EventCreate/eventCreate.action'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'
import { Text } from 'Components'
import { withRouter } from 'react-router-dom'
import BasicInfo from './BasicInfo'
import EventDescription from './EventDescription'
import StepController from './StepController'
import BannerUpload from './BannerUpload'

function getSteps () {
  return ['Basic info', 'Description', 'Banner Upload']
}

function getStepContent (step) {
  switch (step) {
  case 0:
    return <BasicInfo />
  case 1:
    return <EventDescription />
    // todo: add social publish
  case 2:
    return <BannerUpload />
  default:
    return 'Unknown step'
  }
}

const EventDetailManage = ({ match, history }) => {
  const [activeStep, setActiveStep] = React.useState(1)
  const steps = getSteps()
  const _handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1)
  const _handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1)

  const dispatch = useDispatch()
  const error = useSelector(state => get(state, ['eventCreate', 'error']))
  const id = get(match, 'params.id')

  const eventId = useSelector(state =>
    get(state, ['eventCreate', 'data', '_id'])
  )
  const _redirect = () => history.push('/')

  const [getEventData] = useAuthorizationRequest(
    requestEventCreateHandler,
    { id },
    { errorHandler: _redirect }
  )
  useEffect(
    () => {
      !eventId && getEventData()
    },
    [dispatch, eventId, getEventData]
  )
  useEffect(() => {
    if (error && (error.indexOf('404') > 0 || error.indexOf('403'))) {
      _redirect()
    }
  })

  return (
    <Container>
      <div style={{ paddingBottom: 70 }}>
        <Stepper activeStep={activeStep} orientation='vertical'>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>
                <div className='position-relative'>
                  <Divider absolute variant='inset' style={{ top: '50%' }} />
                  <Text
                    fontSize={24}
                    fontWeight={500}
                    p='4'
                    bg='white'
                    className='position-relative'
                  >
                    {label}
                  </Text>
                </div>
              </StepLabel>
              <StepContent className='position-relative'>
                {getStepContent(index)}
                <StepController
                  activeStep={activeStep}
                  handleBack={_handleBack}
                  handleNext={_handleNext}
                  steps={steps}
                />
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </Container>
  )
}

export default withRouter(EventDetailManage)
