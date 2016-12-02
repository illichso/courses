import initialState from '../constants/initialState';
import * as types from '../constants/actionTypes';

export default function authenticationReducer(state =
  {isAuthenticated, username, errorMessage, loading} , action) {
  switch (action.type) {
    case `${types.LOGIN}_FULFILLED`:
      return {
        state,
        isAuthenticated: action.payload.data.authenticated,
        username: action.payload.data.userName,
        errorMessage: null
      };
    case `${types.LOGIN}_REJECTED`:
      return {
        state,
        isAuthenticated: false,
        username: null,
        errorMessage: action.payload.message
      };
    case `${types.LOGOUT}_FULFILLED`:
      return {
        state,
        isAuthenticated: false,
        username: null
      };
    case `${types.GET_SESSION}_PENDING`:
      return {
        state,
        loading: true
      };
    case `${types.GET_SESSION}_FULFILLED`:
      return {
        state,
        isAuthenticated: action.payload.data.authenticated || false,
        username: action.payload.data.userName,
        errorMessage: null,
        loading: false
      };
    case `${types.GET_SESSION}_REJECTED`:
      return {
        state,
        isAuthenticated: false,
        username: null,
        debugError: action.payload,
        loading: false
      };
    case types.ERROR_MESSAGE:
      return {
        state,
        errorMessage: action.message
      };
    default:
      return state;
  }
}

const {isAuthenticated, username, errorMessage, loading} = initialState;
