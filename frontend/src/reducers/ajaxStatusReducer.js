import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

const actionTypesEndsInSuccess = type => {
  return type.substring(type.length - 8) == '_SUCCESS';
};

const actionTypeEndsWithFulfilledOrRejected = (type) => {
  return (type.substring(type.length - 10) == '_FULFILLED' ||
  type.substring(type.length - 9) == '_REJECTED');
};

const actionTypeEndsWithPending = (type) => {
  return type.substring(type.length - 8) == '_PENDING';
};

const ajaxStatusReducer = (state = initialState.ajaxCallsInProgress, action) => {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR ||
    actionTypesEndsInSuccess(action.type)) {
    return state - 1;
  }

  if (actionTypeEndsWithPending(action.type)) {
    return state + 1;
  } else if (actionTypeEndsWithFulfilledOrRejected(action.type)) {
    return state - 1;
  }

  return state;
};

export default ajaxStatusReducer;
