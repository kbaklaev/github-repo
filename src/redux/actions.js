export const ADD_REPOSITORIES = 'ADD_REPOSITORIES'
export const CLEAR_REPOSITORIES = 'CLEAR_REPOSITORIES'
export const ADD_PAGE = 'ADD_PAGE'
export const FETCH_COMPLITE = 'FETCH_COMPLITE'

export const addRepositories = (arr) => {
  return {
    type: ADD_REPOSITORIES,
    payload: arr
  }
}

export const clearRepositories = () => {
  return {
    type: CLEAR_REPOSITORIES
  }
}

export const addPage = () => {
  return {
    type: ADD_PAGE,
  }
}

export const fetchCompliteAction = () => {
  return {
    type: FETCH_COMPLITE
  }
}