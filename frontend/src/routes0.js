import React from 'react';
import { IndexRoute, Route, browserHistory } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AuthorsPage from './components/author/AuthorsPage';
import CoursesPage from './components/course/CoursesPage';
import ManageAuthorPage from './components/author/ManageAuthorPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import LoginPage from "./components/login/LoginPage";
import LogoutPage from "./components/login/LogoutPage";
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated,
  VisibleToUser
} from './accessors/accessors';
import ReactStormpath, {
  Router,
  HomeRoute,
  LoginRoute,
  AuthenticatedRoute } from 'react-stormpath';

ReactStormpath.init();

export default (
  <Router history={browserHistory}>
      <HomeRoute path="/" component={App}>
        <IndexRoute component={HomePage} />
        <LoginRoute path="/login"component={LoginPage} />
        <Route path="about" component={AboutPage}/>
        <AuthenticatedRoute>
          <Route path="authors" component={AuthorsPage}/>
          <Route path="author" component={ManageAuthorPage}/>
          <Route path="author/:id" component={ManageAuthorPage}/>

          <Route path="courses" component={CoursesPage}/>
          <Route path="course" component={ManageCoursePage}/>
          <Route path="course/:id" component={ManageCoursePage}/>
        </AuthenticatedRoute>
      </HomeRoute>
    </Router>
);
