import { initialState } from './store'

const fetchRepositories = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REPOSITORIES':
      return [...state, ...action.payload]

    case 'CLEAR_REPOSITORIES':
      return initialState

    default:
      return state
  }
}

export default fetchRepositories