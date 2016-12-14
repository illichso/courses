import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AuthorsPage from './components/author/AuthorsPage';
import CoursesPage from './components/course/CoursesPage';
import ManageAuthorPage from './components/author/ManageAuthorPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import LoginPage from './components/login/LoginPage';
import LogoutPage from './components/login/LogoutPage';
import LoginSuccess from './components/login/LoginSuccess';
import NotFound from './components/common/NotFound';
import {
  isLoaded as isAuthLoaded,
  load as loadAuth } from './reducers/authenticationReducer';
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated,
  VisibleToUser
} from './accessors/accessors';

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>

      <IndexRoute component={HomePage}/>

      <Route onEnter={requireLogin}>
        <Route path="loginSuccess" component={LoginSuccess}/>
      </Route>

      <Route path="authors" component={AuthorsPage}/>
      <Route path="author" component={ManageAuthorPage}/>
      <Route path="author/:id" component={ManageAuthorPage}/>

      <Route path="courses" component={CoursesPage}/>
      <Route path="course" component={ManageCoursePage}/>
      <Route path="course/:id" component={ManageCoursePage}/>

      <Route path="about" component={AboutPage}/>
      <Route path="login" component={LoginPage}/>
      <Route path="logout" component={LogoutPage}/>

      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
