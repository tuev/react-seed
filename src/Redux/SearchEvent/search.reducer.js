const initStore = [
  {
    _id: '1',
    title: 'APPLICATION 1',
    month: 'JUL',
    date: '9',
    content: 'Tue, Jul 9, 12:00pm',
    url:
      'https://www.JiptJipt.com/e/make-money-blogging-online-course-tickets-62966638912?aff=ebdssbcitybrowse&utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&utm-source=cp&utm-term=citybrowse',
    image:
      'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/64976708_2426982217323184_2036629781881028608_n.jpg?_nc_cat=102&_nc_eui2=AeFD4KRZsioG4g-JurslK43cOnXMwfpBVMJBRms0KkvssUwoLO2hRx59ch5osKtd30WJoPFN9klHXV6oQAlAnHd8G8XuGxyB--WKzKRipUBdFg&_nc_oc=AQn_iHhHWnWSVo1uIC1amv0-FrDsuAcbfdO7chV8jPGXy5BCOQFqVXFiEhkvhjfps1g&_nc_ht=scontent.fsgn8-1.fna&oh=9270093bbb5017cfb31142955669c20f&oe=5D7F2CA1',
    alt: 'Card image cap 1',
    address: 'CAPELLA PARKVIEW, Hồ Chí Minh, Hồ Chí Minh',
    price: 'Free'
  },
  {
    _id: '2',
    title: 'APPLICATION 2',
    month: 'JUL',
    date: '9',
    content: 'Tue, Jul 9, 12:00pm',
    url:
      'https://www.JiptJipt.com/e/make-money-blogging-online-course-tickets-62966638912?aff=ebdssbcitybrowse&utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&utm-source=cp&utm-term=citybrowse',
    image:
      'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/64976708_2426982217323184_2036629781881028608_n.jpg?_nc_cat=102&_nc_eui2=AeFD4KRZsioG4g-JurslK43cOnXMwfpBVMJBRms0KkvssUwoLO2hRx59ch5osKtd30WJoPFN9klHXV6oQAlAnHd8G8XuGxyB--WKzKRipUBdFg&_nc_oc=AQn_iHhHWnWSVo1uIC1amv0-FrDsuAcbfdO7chV8jPGXy5BCOQFqVXFiEhkvhjfps1g&_nc_ht=scontent.fsgn8-1.fna&oh=9270093bbb5017cfb31142955669c20f&oe=5D7F2CA1',
    alt: 'Card image cap 2',
    address: 'The American Center, Ho Chi Minh City.',
    price: 'Starts at $48.17'
  },
  {
    _id: '3',
    title: 'APPLICATION 3',
    month: 'JUL',
    date: '9',
    content: 'Tue, Jul 9, 12:00pm',
    url:
      'https://www.JiptJipt.com/e/make-money-blogging-online-course-tickets-62966638912?aff=ebdssbcitybrowse&utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&utm-source=cp&utm-term=citybrowse',
    image:
      'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/64976708_2426982217323184_2036629781881028608_n.jpg?_nc_cat=102&_nc_eui2=AeFD4KRZsioG4g-JurslK43cOnXMwfpBVMJBRms0KkvssUwoLO2hRx59ch5osKtd30WJoPFN9klHXV6oQAlAnHd8G8XuGxyB--WKzKRipUBdFg&_nc_oc=AQn_iHhHWnWSVo1uIC1amv0-FrDsuAcbfdO7chV8jPGXy5BCOQFqVXFiEhkvhjfps1g&_nc_ht=scontent.fsgn8-1.fna&oh=9270093bbb5017cfb31142955669c20f&oe=5D7F2CA1',
    alt: 'Card image cap 3',
    address: 'Asiana Plaza, Thành phố Hồ Chí Minh.',
    price: 'Free'
  }
]

const SearchEventReducer = (state = initStore, action) => {
  if (action.type === 'GET_EVENT') {
    return action.payload
  }
  if (action.type === 'CHOOSE_EVENT') {
    console.log(action, 'action')
    return state.filter(i => i._id === action.payload._id)
  }
  return state
}

export default SearchEventReducer
