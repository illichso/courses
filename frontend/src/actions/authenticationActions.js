import axios from 'axios';
import * as types from '../constants/actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function displayAuthError(message) {
  return {type: types.ERROR_MESSAGE, message};
}

export function login(username, password) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return axios.post('/api/session', {username, password}).then(userToken => {
      return dispatch({
        type: `${types.LOGIN}_FULFILLED`,
        payload: userToken
      });
    }).catch(error => {
      dispatch(ajaxCallError(error));
      console.log(error);
      throw(error);
    });
  };
}

export function logout() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return axios.delete('/api/session').then(userToken => {
      return dispatch({
        type: `${types.LOGOUT}_FULFILLED`,
        payload: userToken
      });
    }).catch(error => {
      dispatch(ajaxCallError(error));
      console.log(error);
      throw(error);
    });
  };
}

export function getSession() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return axios.get('/api/session').then(userToken => {
      return dispatch({
        type: `${types.GET_SESSION}_FULFILLED`,
        payload: userToken
      });
    }).catch(error => {
      dispatch(ajaxCallError(error));
      console.log(error);
      throw(error);
    });
  };
}
