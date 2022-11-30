import { CLEAR_USERS, SEARCH_USERS, GET_USER } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        usersData: action.payload,
      };
    case CLEAR_USERS:
      return {
        ...state,
        usersData: [],
        user: {}
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};