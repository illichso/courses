/*eslint-disable import/default */
import {setupAxiosInterceptors} from "./axios";
import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";
import "./styles/styles.css"; // Yep, that"s right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/toastr/build/toastr.min.css";
import {syncHistoryWithStore} from "react-router-redux";
import {set, pageview} from "react-ga";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

setupAxiosInterceptors();

const logPageView = () => {
  set({page: window.location.pathname});
  pageview(window.location.pathname);
  window.scrollTo(0, 0);
};

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} onUpdate={logPageView}/>
  </Provider>,
  document.getElementById("app")
);
