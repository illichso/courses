import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AuthorsPage from './components/author/AuthorsPage';
import CoursesPage from './components/course/CoursesPage';
import ManageAuthorPage from './components/author/ManageAuthorPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>

    <Route path="authors" component={AuthorsPage}/>
    <Route path="author" component={ManageAuthorPage}/>
    <Route path="author/:id" component={ManageAuthorPage}/>

    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/>

    <Route path="about" component={AboutPage}/>
  </Route>
);
