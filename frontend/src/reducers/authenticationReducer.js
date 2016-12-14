import InitialAuthValues from '../constants/InitialAuthValues';
import * as types from '../constants/actionTypes';

const {isAuthenticated, username, errorMessage, loading} = InitialAuthValues;

const initialState = {
  loaded: false
};

const LOAD = 'redux-example/auth/LOAD';
const LOAD_SUCCESS = 'redux-example/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/auth/LOAD_FAIL';
const LOGIN = 'redux-example/auth/LOGIN';
const LOGIN_SUCCESS = 'redux-example/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'redux-example/auth/LOGIN_FAIL';
const LOGOUT = 'redux-example/auth/LOGOUT';
const LOGOUT_SUCCESS = 'redux-example/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'redux-example/auth/LOGOUT_FAIL';

export default function authenticationReducer(state = {isAuthenticated, username, errorMessage, loading} , action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case `${types.LOGIN}_FULFILLED`:
      return {
        ...state,
        isAuthenticated: action.payload.data.authenticated,
        username: action.payload.data.userName,
        errorMessage: null
      };
    case `${types.LOGIN}_REJECTED`:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        errorMessage: action.payload.message
      };
    case `${types.LOGOUT}_FULFILLED`:
      return {
        ...state,
        isAuthenticated: false,
        username: null
      };
    case `${types.GET_SESSION}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${types.GET_SESSION}_FULFILLED`:
      return {
        ...state,
        isAuthenticated: action.payload.data.authenticated || false,
        username: action.payload.data.userName,
        errorMessage: null,
        loading: false
      };
    case `${types.GET_SESSION}_REJECTED`:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        debugError: action.payload,
        loading: false
      };
    case types.ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/loadAuth')
  };
}

export function login(name) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/login', {
      data: {
        name: name
      }
    })
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}
