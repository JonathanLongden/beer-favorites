import {
  ADD_BEER
} from '../actions/beers'

const initialState = [
  {
		id: 0,
    name: 'Thunder Monkey',
		brewery: 'MAP Brewing',
		alcoholContent: 4.2

  }
]

export default function beers(state = initialState, action) {
  switch (action.type) {
    case ADD_BEER:
      return [
        ...state,
        {
          name: action.beer.name,
          brewery: action.beer.brewery,
          alcoholContent: action.beer.alcoholContent
        }
      ]
    default:
      return state
  }
}