import SearchEvent from '../SearchEventDropdown'
import SearchLocation from '../SearchLocationDropdown'
import SearchTime from '../SearchTimeDropdown'

const SearchList = [
  {
    component: SearchEvent,
    titleDropdown: 'Looking for',
    placeHolder: 'Event',
    headerDropdown: 'Event',
    mouseEnterEvent: true
  },
  {
    component: SearchLocation,
    titleDropdown: 'In',
    placeHolder: 'Your location',
    headerDropdown: 'Popular',
    mouseEnterEvent: false
  },
  {
    component: SearchTime,
    titleDropdown: 'On',
    placeHolder: 'Any date',
    headerDropdown: 'Any date',
    mouseEnterEvent: false,
    itemsTime: [
      'Today',
      'Tomorrow',
      'This weekend',
      'This week',
      'Next week',
      'This month',
      'Pick a date...'
    ]
  }
]

export default SearchList
