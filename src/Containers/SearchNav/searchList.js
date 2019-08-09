import {
  SearchEventItem,
  SearchLocationItem,
  SearchTimeItem
} from 'Components/SearchDropdown/SearchDropdownItem'

const SearchList = [
  {
    component: SearchEventItem,
    title: 'Looking for',
    placeHolder: 'Event',
    mouseEnterEvent: true,
    dropdownType: 'input',
    headerDropdown: 'Events',
    searchType: 'event'
  },
  {
    component: SearchLocationItem,
    title: 'In',
    placeHolder: 'Your location',
    mouseEnterEvent: false,
    dropdownType: 'input',
    headerDropdown: 'Locations',
    searchType: 'location'
  },
  {
    component: SearchTimeItem,
    title: 'On',
    placeHolder: 'Any date',
    mouseEnterEvent: false,
    dropdownType: 'select',
    headerDropdown: 'Times',
    searchType: 'time'
  }
]

export default SearchList
