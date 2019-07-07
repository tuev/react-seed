import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Button } from 'reactstrap'
import './event.scss'

export default class Event extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false,
      show: false,
      dataEvent: [
        {
          'id': 1,
          'title': 'APPLICATION 1',
          'date': 'JUL 9',
          'content': 'Tue, Jul 9',
          'url': 'https://www.eventbrite.com/e/make-money-blogging-online-course-tickets-62966638912?aff=ebdssbcitybrowse&utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&utm-source=cp&utm-term=citybrowse',
          'subContent': '2:30pm CoderSchool, Hồ Chí Minh',
          'image': 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/64976708_2426982217323184_2036629781881028608_n.jpg?_nc_cat=102&_nc_eui2=AeFD4KRZsioG4g-JurslK43cOnXMwfpBVMJBRms0KkvssUwoLO2hRx59ch5osKtd30WJoPFN9klHXV6oQAlAnHd8G8XuGxyB--WKzKRipUBdFg&_nc_oc=AQn_iHhHWnWSVo1uIC1amv0-FrDsuAcbfdO7chV8jPGXy5BCOQFqVXFiEhkvhjfps1g&_nc_ht=scontent.fsgn8-1.fna&oh=9270093bbb5017cfb31142955669c20f&oe=5D7F2CA1',
          'alt': 'Card image cap 1'
        },
        {
          'id': 2,
          'title': 'APPLICATION 2',
          'date': 'JUL 9',
          'content': 'Tue, Jul 9',
          'url': 'https://www.eventbrite.com/e/make-money-blogging-online-course-tickets-62966638912?aff=ebdssbcitybrowse&utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&utm-source=cp&utm-term=citybrowse',
          'subContent': '2:30pm CoderSchool, Hồ Chí Minh',
          'image': 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/42595339_459488881208513_4998129733859278848_n.jpg?_nc_cat=109&_nc_eui2=AeFBYpgZs_0aB58slfMDdgP1hgKcwSWVyhlFnW3IEoELTqi8dr1U6ejtuTfZ42W6yTC4DpyHw31BdpUhawBpQsJhkA7woyXOHCpp1rtUmNJO9w&_nc_oc=AQm6B4Rc8Gv7L0SlHXRr6r3YiOuF8dFcge4wZWKEC76GxhGdWaUR3ylTRpZr81KUJUQ&_nc_ht=scontent.fsgn3-1.fna&oh=27f15ce4ee134e48a0b3355f174b40de&oe=5DB8BAB8',
          'alt': 'Card image cap 2'
        },
        {
          'id': 3,
          'title': 'APPLICATION 3',
          'date': 'JUL 9',
          'content': 'Tue, Jul 9',
          'url': 'https://www.eventbrite.com/e/make-money-blogging-online-course-tickets-62966638912?aff=ebdssbcitybrowse&utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&utm-source=cp&utm-term=citybrowse',
          'subContent': '2:30pm CoderSchool, Hồ Chí Minh',
          'image': 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/42595339_459488881208513_4998129733859278848_n.jpg?_nc_cat=109&_nc_eui2=AeFBYpgZs_0aB58slfMDdgP1hgKcwSWVyhlFnW3IEoELTqi8dr1U6ejtuTfZ42W6yTC4DpyHw31BdpUhawBpQsJhkA7woyXOHCpp1rtUmNJO9w&_nc_oc=AQm6B4Rc8Gv7L0SlHXRr6r3YiOuF8dFcge4wZWKEC76GxhGdWaUR3ylTRpZr81KUJUQ&_nc_ht=scontent.fsgn3-1.fna&oh=27f15ce4ee134e48a0b3355f174b40de&oe=5DB8BAB8',
          'alt': 'Card image cap 3'
        },
        {
          'id': 4,
          'title': 'APPLICATION 4',
          'date': 'JUL 9',
          'content': 'Tue, Jul 9',
          'url': 'https://www.eventbrite.com/e/make-money-blogging-online-course-tickets-62966638912?aff=ebdssbcitybrowse&utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&utm-source=cp&utm-term=citybrowse',
          'subContent': '2:30pm CoderSchool, Hồ Chí Minh',
          'image': 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/42595339_459488881208513_4998129733859278848_n.jpg?_nc_cat=109&_nc_eui2=AeFBYpgZs_0aB58slfMDdgP1hgKcwSWVyhlFnW3IEoELTqi8dr1U6ejtuTfZ42W6yTC4DpyHw31BdpUhawBpQsJhkA7woyXOHCpp1rtUmNJO9w&_nc_oc=AQm6B4Rc8Gv7L0SlHXRr6r3YiOuF8dFcge4wZWKEC76GxhGdWaUR3ylTRpZr81KUJUQ&_nc_ht=scontent.fsgn3-1.fna&oh=27f15ce4ee134e48a0b3355f174b40de&oe=5DB8BAB8',
          'alt': 'Card image cap 4'
        }
      ],
      dataEvent2: [
        {
          'id': 5,
          'title': 'APPLICATION 1',
          'date': 'JUL 9',
          'content': 'Tue, Jul 9',
          'url': 'https://www.eventbrite.com/e/make-money-blogging-online-course-tickets-62966638912?aff=ebdssbcitybrowse&utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&utm-source=cp&utm-term=citybrowse',
          'subContent': '2:30pm CoderSchool, Hồ Chí Minh',
          'image': 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F60389455%2F268624826668%2F1%2Foriginal.20190415-092149?w=512&auto=compress&rect=0%2C17%2C560%2C280&s=52d163cc0544a83f5469b123de58cb78',
          'alt': 'Card image cap 1'
        },
        { 'id': 6,
          'title': 'APPLICATION 2',
          'date': 'JUL 9',
          'content': 'Tue, Jul 9',
          'url': 'https://www.eventbrite.com/e/make-money-blogging-online-course-tickets-62966638912?aff=ebdssbcitybrowse&utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&utm-source=cp&utm-term=citybrowse',
          'subContent': '2:30pm CoderSchool, Hồ Chí Minh',
          'image': 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/64576992_173561680328759_1498046724118151168_n.jpg?_nc_cat=110&_nc_eui2=AeEiZyrBtETb3qh54Zh6yfVzjEGpTu_-4nzDTDKspjkhkPCdjeHIY0vmxutQlzsXPRlAey9s0rBwaW3p09TGCuXA6VbIKKUh72Bpr9CSWFeUYQ&_nc_oc=AQmjFGup0rbMxOJceLvsdY-xkIsyDZiGZdyMqM-mgEicFlvJuCU5_is67UflbbktDdI&_nc_ht=scontent.fsgn8-1.fna&oh=29b19c4be8cd0007f70c52284d021852&oe=5DBF074D',
          'alt': 'Card image cap 2'
        },
        {
          'id': 6,
          'title': 'APPLICATION 3',
          'date': 'JUL 9',
          'content': 'Tue, Jul 9',
          'url': 'https://www.eventbrite.com/e/make-money-blogging-online-course-tickets-62966638912?aff=ebdssbcitybrowse&utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&utm-source=cp&utm-term=citybrowse',
          'subContent': '2:30pm CoderSchool, Hồ Chí Minh',
          'image': 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/64576992_173561680328759_1498046724118151168_n.jpg?_nc_cat=110&_nc_eui2=AeEiZyrBtETb3qh54Zh6yfVzjEGpTu_-4nzDTDKspjkhkPCdjeHIY0vmxutQlzsXPRlAey9s0rBwaW3p09TGCuXA6VbIKKUh72Bpr9CSWFeUYQ&_nc_oc=AQmjFGup0rbMxOJceLvsdY-xkIsyDZiGZdyMqM-mgEicFlvJuCU5_is67UflbbktDdI&_nc_ht=scontent.fsgn8-1.fna&oh=29b19c4be8cd0007f70c52284d021852&oe=5DBF074D',
          'alt': 'Card image cap 3'
        },
        {
          'id': 7,
          'title': 'APPLICATION 4',
          'date': 'JUL 9',
          'content': 'Tue, Jul 9',
          'url': 'https://www.eventbrite.com/e/make-money-blogging-online-course-tickets-62966638912?aff=ebdssbcitybrowse&utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&utm-source=cp&utm-term=citybrowse',
          'subContent': '2:30pm CoderSchool, Hồ Chí Minh',
          'image': 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/1016226_541375139232678_882071277_n.jpg?_nc_cat=111&_nc_eui2=AeGzD8Gzn-WALEIuJinGBiAhrALYHDYpGOwRnModif8ZRtpcGJrzWVGSXz4eYvHKnFA9YmPC9fd7ug1ZlaXScAo8wopTWqVJNu4g20v4yGeIvw&_nc_oc=AQmmGQUnhOrDvcOO2n9U-9HWUMIj4kfXg1xTpAY9umWD1V36e9HIwDa9x0ODrRL9RYo&_nc_ht=scontent.fsgn3-1.fna&oh=954109f731a4ef2559d3f5fbc31adf0c&oe=5DC05216',
          'alt': 'Card image cap 4'
        }
      ]
    }
    this.toggleShareEvent = this.toggleShareEvent.bind(this)
    this.toggleSaveEvent = this.toggleSaveEvent.bind(this)
  }
  toggleShareEvent () {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  toggleSaveEvent () {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }
  render () {
    var EventList = this.state.dataEvent.map(
      (event, index) => {
        let result = ''
        result = (
          <Card className='eds-g-cell eds-g-cell-3-12 eds-g-cell--has-overflow'>
            <CardImg width='286px' height='180px' src={event.image} alt={event.alt} />
            <div className='eds-media-card-content__actions-container eds-media-card-content__actions-container--always-visible'>
              <span className='eds-media-card-content__actions-container__action eds-l-pad-all-1 eds-l-mar-right-2'>
                <Button className='eds-btn--button eds-btn--none eds-btn--icon-only btn btn-secondary' onClick={this.toggleShareEvent}>
                  <i className='eds-vector-image eds-icon--small eds-vector-image--block' title='Share' data-spec='icon'><svg viewBox='0 0 24 24'><path fillRule='evenodd' clipRule='evenodd' d='M18 16v2H6v-2H4v4h16v-4zM12 4L7 9l1.4 1.4L11 7.8V16h2V7.8l2.6 2.6L17 9l-5-5z' /></svg><span className='eds-is-hidden-accessible'>Share</span></i>
                </Button>
              </span>
              <span className='eds-media-card-content__actions-container__action eds-l-pad-all-1 eds-l-mar-right-2'>
                <Button className='eds-btn--button eds-btn--none eds-btn--icon-only btn btn-secondary' onClick={this.toggleSaveEvent}>
                  <i className='eds-vector-image eds-icon--small eds-vector-image--block' title='Save' data-spec='icon'>
                    <svg viewBox='0 0 24 24'><path fillRule='evenodd' clipRule='evenodd' d='M18.8 6.2C18.1 5.4 17 5 16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.6-1.6 1.6-4.2 0-5.8zm-1.4 4.4L12 16.1l-5.4-5.5c-.8-.8-.8-2.2 0-3C7 7.2 7.5 7 8 7c.5 0 1 .2 1.4.6l2.6 2.7 2.7-2.7c.3-.4.8-.6 1.3-.6s1 .2 1.4.6c.8.8.8 2.2 0 3z' /></svg>
                    <span className='eds-is-hidden-accessible'>Save</span></i>
                </Button>
              </span>
            </div>
            <CardBody className='eds-media-card-content__content-container eds-media-card-content__content'>
              <CardTitle className='eds-is-hidden-accessible eds-event-card__formatted-name--is-clamped' aria-hidden='true'>{event.title}</CardTitle>
              <CardSubtitle className='eds-media-card-content__extra-content eds-l-pad-right-4'>{event.date}</CardSubtitle>
              <CardText className='eds-media-card-content__sub-content'>{event.content} <br />{event.subContent}</CardText>
            </CardBody>
          </Card>
        )
        return result
      }
    )

    var EventList2 = this.state.dataEvent2.map(
      (event, index) => {
        let result = ''
        result = (
          <Card className='eds-g-cell eds-g-cell-3-12 eds-g-cell--has-overflow' >
            <CardImg width='286px' height='180px' src={event.image} alt={event.alt} />
            <div className='eds-media-card-content__actions-container eds-media-card-content__actions-container--always-visible'>
              <span className='eds-media-card-content__actions-container__action eds-l-pad-all-1 eds-l-mar-right-2'>
                <Button className='eds-btn--button eds-btn--none eds-btn--icon-only btn btn-secondary' onClick={this.toggleShareEvent}>
                  <i className='eds-vector-image eds-icon--small eds-vector-image--block' title='Share' data-spec='icon'><svg viewBox='0 0 24 24'><path fillRule='evenodd' clipRule='evenodd' d='M18 16v2H6v-2H4v4h16v-4zM12 4L7 9l1.4 1.4L11 7.8V16h2V7.8l2.6 2.6L17 9l-5-5z' /></svg><span className='eds-is-hidden-accessible'>Share</span></i>
                </Button>
              </span>
              <span className='eds-media-card-content__actions-container__action eds-l-pad-all-1 eds-l-mar-right-2'>
                <Button className='eds-btn--button eds-btn--none eds-btn--icon-only btn btn-secondary' onClick={this.toggleSaveEvent}>
                  <i className='eds-vector-image eds-icon--small eds-vector-image--block' title='Save' data-spec='icon'>
                    <svg viewBox='0 0 24 24'><path fillRule='evenodd' clipRule='evenodd' d='M18.8 6.2C18.1 5.4 17 5 16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.6-1.6 1.6-4.2 0-5.8zm-1.4 4.4L12 16.1l-5.4-5.5c-.8-.8-.8-2.2 0-3C7 7.2 7.5 7 8 7c.5 0 1 .2 1.4.6l2.6 2.7 2.7-2.7c.3-.4.8-.6 1.3-.6s1 .2 1.4.6c.8.8.8 2.2 0 3z' /></svg>
                    <span className='eds-is-hidden-accessible'>Save</span></i>
                </Button>
              </span>
            </div>
            <CardBody className='eds-media-card-content__content-container eds-media-card-content__content'>
              <CardTitle className='eds-is-hidden-accessible eds-event-card__formatted-name--is-clamped' aria-hidden='true'>{event.title}</CardTitle>
              <CardSubtitle className='eds-media-card-content__extra-content eds-l-pad-right-4'>{event.date}</CardSubtitle>
              <CardText className='eds-media-card-content__sub-content'>{event.content} <br />{event.subContent}</CardText>
            </CardBody>
          </Card>
        )
        return result
      }
    )
    return (
      <div className='content-bucket'>
        <div className='contentEvent'><h2>Phát Quà Gia Lai</h2><a className='seeLink'>Đọc thêm</a>></div>
        <div className='eds-show-up-md'>
          {EventList}
        </div>
        <div />
        <div className='contentEvent'><h2>Phát Quà Phan Rang</h2><a className='seeLink'>Đọc thêm</a>></div>
        <div className='eds-show-up-md'>
          {EventList2}
        </div>
        <div>

          <Modal isOpen={this.state.modal} fade={false} toggle={this.toggleShareEvent} className={this.props.className}>
            <ModalHeader toggle={this.toggleShareEvent}>Chia sẻ bạn bè</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <div className='eds-media-card-content__actions-container eds-media-card-content__actions-container--always-visible'>
                    <span className='eds-media-card-content__actions-container__action eds-l-pad-all-1 eds-l-mar-right-2'>
                      <Button className='eds-btn--button eds-btn--none eds-btn--icon-only btn btn-secondary'>
                        <i className='eds-vector-image eds-icon--small eds-vector-image--block' title='Share' data-spec='icon'>
                          <svg viewBox='0 0 24 24'><path fillRule='evenodd' clipRule='evenodd' d='M13.1 9h3.1l-.2 2.7h-2.9V21H9.4v-9.4h-2V9h2V7.1c0-.8 0-2 .6-2.8.6-.8 1.5-1.4 3-1.4 2.5 0 3.5.3 3.5.3L16 6s-.8-.2-1.6-.2-1.4.3-1.4 1l.1 2.2' /></svg>
                          <span className='eds-is-hidden-accessible'>Facebook</span></i>
                      </Button>
                    </span>
                    <span className='eds-media-card-content__actions-container__action eds-l-pad-all-1 eds-l-mar-right-2'>
                      <Button className='eds-btn--button eds-btn--none eds-btn--icon-only btn btn-secondary'>
                        <i className='eds-vector-image eds-icon--small eds-vector-image--block' title='Save' data-spec='icon'>
                          <svg viewBox='0 0 24 24'><path fillRule='evenodd' clipRule='evenodd' d='M12.7 14.5l5.2-5.8-4.6 2.9-2.7-2.9-5.2 5.8 4.8-2.7 2.5 2.7zM12 2c5.5 0 10 4.1 10 9.2s-4.5 9.2-10 9.2c-1 0-2.1-.1-3-.4l-3.3 2v-3.6C3.4 16.7 2 14.1 2 11.2 2 6.1 6.5 2 12 2z' /></svg>
                          <span className='eds-is-hidden-accessible'>Messager</span></i>
                      </Button>
                    </span>
                    <span className='eds-media-card-content__actions-container__action eds-l-pad-all-1 eds-l-mar-right-2'>
                      <Button className='eds-btn--button eds-btn--none eds-btn--icon-only btn btn-secondary'>
                        <i className='eds-vector-image eds-icon--small eds-vector-image--block' title='Save' data-spec='icon'>
                          <svg viewBox='0 0 24 24'><path fillRule='evenodd' clipRule='evenodd' d='M21.4 4.1s-.6.4-1.2.7c-.6.2-1.3.4-1.3.4s-2-2.3-4.9-.8c-2.9 1.5-2 4.5-2 4.5s-2.9-.2-4.9-1.2C4.9 6.5 3.4 4.6 3.4 4.6s-.9 1.4-.5 3 1.8 2.5 1.8 2.5-.4 0-.9-.2c-.5-.1-1-.4-1-.4s-.1 1.3.8 2.6S6 13.6 6 13.6l-.8.2h-.9s.2 1.1 1.4 2c1.1.8 2.3.8 2.3.8s-1.1.9-2.7 1.4c-1.6.5-3.3.3-3.3.3s6 4 12.2.3c6.2-3.7 5.7-10.7 5.7-10.7s.6-.4 1-.9l1-1.2s-.7.3-1.3.5c-.5.2-.9.2-.9.2s.6-.4.9-.9c.5-.7.8-1.5.8-1.5z' /></svg>
                          <span className='eds-is-hidden-accessible'>Twitter</span></i>
                      </Button>
                    </span>
                    <span className='eds-media-card-content__actions-container__action eds-l-pad-all-1 eds-l-mar-right-2'>
                      <Button className='eds-btn--button eds-btn--none eds-btn--icon-only btn btn-secondary'>
                        <i className='eds-vector-image eds-icon--small eds-vector-image--block' title='Save' data-spec='icon'>
                          <svg viewBox='0 0 24 24'><path fillRule='evenodd' clipRule='evenodd' d='M12 14.2L4 8.4V18h16V8.4l-8 5.8z' /><path fillRule='evenodd' clipRule='evenodd' d='M4.1 6l7.9 5.8L19.9 6z' /></svg>
                          <span className='eds-is-hidden-accessible'>Email</span></i>
                      </Button>
                    </span>
                  </div>
                  <Input type='eventURL' name='eventURL' id='eventURL' placeholder='EventURL' />
                </FormGroup>
              </Form>
            </ModalBody>
          </Modal>

          <Modal style={{ width: '19000px' }} isOpen={this.state.show} fade={false} toggle={this.toggleSaveEvent} className={this.props.className}>
            <ModalHeader toggle={this.toggleSaveEvent}>Đăng ký tham gia sự kiện</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <div className='eds-media-card-content__actions-container eds-media-card-content__actions-container--always-visible'>
                    <span className='eds-media-card-content__actions-container__action eds-l-pad-all-1 eds-l-mar-right-2'>
                      <img className='eds-media-card-content__image eds-max-img' src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F63257150%2F309055604778%2F1%2Foriginal.20190602-145430?w=512&amp;auto=compress&amp;rect=1%2C0%2C1098%2C549&amp;s=dca5d3b2d6436b78f05768a164dcd6df' alt='Event image' />
                      <Button color='primary'>Tiếp tục</Button>
                    </span>
                  </div>
                </FormGroup>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    )
  };
};
