import { initialState } from "./store";
import { ADD_REPOSITORIES, CLEAR_REPOSITORIES, ADD_PAGE, FETCH_COMPLITE } from "./actions";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPOSITORIES:
      return {
        ...state,
        ...{ repositories: [...state.repositories, ...action.payload] },
      };

    case CLEAR_REPOSITORIES:
      return initialState;

    case ADD_PAGE:
      return {
        ...state,
        ...{ fetchPage: state.fetchPage + 1 }
      }

    case FETCH_COMPLITE:
      return {
        ...state,
        ...{ fetchComplite: true }
      }

    default:
      return state;
  }
};

export default rootReducer;
