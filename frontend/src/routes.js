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
import { UserIsAuthenticated , UserIsNotAuthenticated } from './accessors/accessors';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>

    <Route path="authors" component={UserIsAuthenticated(AuthorsPage)}/>
    <Route path="author" component={UserIsAuthenticated(ManageAuthorPage)}/>
    <Route path="author/:id" component={UserIsAuthenticated(ManageAuthorPage)}/>

    <Route path="courses" component={UserIsAuthenticated(CoursesPage)}/>
    <Route path="course" component={UserIsAuthenticated(ManageCoursePage)}/>
    <Route path="course/:id" component={UserIsAuthenticated(ManageCoursePage)}/>

    <Route path="about" component={UserIsAuthenticated(AboutPage)}/>

    <Route path="/login" component={UserIsNotAuthenticated(LoginPage)}/>
  </Route>
);
