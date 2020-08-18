import { createStore } from 'redux'

import rootReducer from './rootReducer'

export const initialState = {
  repositories: [],
  fetchPage: 1,
  fetchComplite: false
}

const store = createStore(
  rootReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store