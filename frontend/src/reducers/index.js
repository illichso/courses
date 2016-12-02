import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import authentication from './authenticationReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  authentication,
  courses,
  authors,
  ajaxCallsInProgress,
  routing: routerReducer,
  isAuthenticated: (state = {}) => state,
  username: (state = {}) => state,
  errorMessage: (state = {}) => state,
  loading: (state = {}) => state
});

export default rootReducer;
