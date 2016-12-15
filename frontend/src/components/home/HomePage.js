import React, {Component} from "react";
import {Link} from "react-router";

class HomePage extends Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>Welcome to Courses</h1>
        <p>Build using MongoDB, Java 8, Spring Boot, Spring Data Rest, Gradle, Groovy, Webpack, React, Redux, React Router, ES6 and Docker.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
