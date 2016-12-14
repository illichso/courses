import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AuthorsPage from './components/author/AuthorsPage';
import CoursesPage from './components/course/CoursesPage';
import ManageAuthorPage from './components/author/ManageAuthorPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import LoginPage from "./components/login/LoginPage";
import LogoutPage from "./components/login/LogoutPage";
import PrivateRoute from "./components/login/PrivateRoute";
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated
} from './accessors/accessors';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>

    <Route path="authors" component={PrivateRoute(AuthorsPage)}/>
    <Route path="author" component={PrivateRoute(ManageAuthorPage)}/>
    <Route path="author/:id" component={PrivateRoute(ManageAuthorPage)}/>

    <Route path="courses" component={PrivateRoute(CoursesPage)}/>
    <Route path="course" component={PrivateRoute(ManageCoursePage)}/>
    <Route path="course/:id" component={PrivateRoute(ManageCoursePage)}/>

    <Route path="about" component={PrivateRoute(AboutPage)}/>

    <Route path="login" component={UserIsNotAuthenticated(LoginPage)}/>
    <Route path="logout" component={PrivateRoute(LogoutPage)}/>
  </Route>
);
