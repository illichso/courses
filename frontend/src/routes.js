import React from 'react';
import { IndexRoute, Route } from 'react-router';
//import {push} from 'react-router-redux';
//import { isLoaded as isAuthLoaded, load as loadAuth } from './redux/modules/auth';
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import AuthorsPage from "./components/author/AuthorsPage";
import CoursesPage from "./components/course/CoursesPage";
import ManageAuthorPage from "./components/author/ManageAuthorPage";
import ManageCoursePage from "./components/course/ManageCoursePage";
import LoginPage from "./components/login/LoginPage";
import LogoutPage from "./components/login/LogoutPage";

export default function () {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={HomePage} />

      { /* Routes requiring login */ }
      <Route>
        <Route path="authors" component={privateRoute(AuthorsPage)}/>
        <Route path="author" component={privateRoute(ManageAuthorPage)}/>
        <Route path="author/:id" component={privateRoute(ManageAuthorPage)}/>

        <Route path="courses" component={privateRoute(CoursesPage)}/>
        <Route path="course" component={privateRoute(ManageCoursePage)}/>
        <Route path="course/:id" component={privateRoute(ManageCoursePage)}/>
        <Route path="about" component={UserIsAuthenticated(AboutPage)}/>
      </Route>

      { /* Routes */ }
      <Route path="login" component={LoginPage}/>
      <Route path="logout" component={LogoutPage}/>
    </Route>
  );
}
