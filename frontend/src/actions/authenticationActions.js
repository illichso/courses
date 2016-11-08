import axios from 'axios';
import * as types from '../constants/actionTypes';

export function displayAuthError(message) {
  return {type: types.ERROR_MESSAGE, message};
}

export function login(username, password) {
  return dispatch => {
    return dispatch({
      type: types.LOGIN,
      payload: axios.post('/api/session', {username, password})
    });
  };
}

export function logout() {
  return dispatch => {
    return dispatch({
      type: types.LOGOUT,
      payload: axios.delete('/api/session')
    });
  };
}

export function getSession() {
  return (dispatch) => {
    return dispatch({
      type: types.GET_SESSION,
      payload: axios.get('/api/session')
    });
  };
}


