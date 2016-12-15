import * as types from "../constants/actionTypes";
import initialState from "../constants/initialState";

const ajaxStatusReducer = (state = initialState.ajaxCallsInProgress, action) => {
  const type = action.type;
  if (shouldIncreaseState(type)) {
    return increaseState(state);
  } else if (shouldDecreaseState(type)) {
    return decreaseState(state);
  }
  return state;
};

const shouldIncreaseState = type => {
  return type == types.BEGIN_AJAX_CALL
    || type.substring(type.length - 8) == "_PENDING";
};

const shouldDecreaseState = type => {
  return type == types.AJAX_CALL_ERROR
    || type.substring(type.length - 8) == "_SUCCESS"
    || type.substring(type.length - 10) == "_FULFILLED"
    || type.substring(type.length - 9) == "_REJECTED";
};

const increaseState = state => {
  return state + 1;
};

const decreaseState = state => {
   return state - 1;
};

export default ajaxStatusReducer;
