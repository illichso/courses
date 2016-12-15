import React, {PropTypes, Component} from "react";
import Header from "./common/Header";
import toastr from "toastr";
import {redirectHome} from "./common/Navigation";
import {connect} from "react-redux";
import {getSession, logout} from "../actions/authenticationActions";

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.onLogout = this.onLogout.bind(this);

  }
  componentDidMount() {
    this.props.getSession();
  }

  onLogout(event) {
    event.preventDefault();
    this.props.logout()
      .then(() => {
        toastr.success("Logout success!");
        redirectHome();
      });
  }

  render () {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
          coursesCount={this.props.coursesCount}
          authorsCount={this.props.authorsCount}
          onLogout={this.onLogout}
          />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  coursesCount: PropTypes.number.isRequired,
  authorsCount: PropTypes.number.isRequired,
  getSession: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};


const mapStateToProps = (state, ownProps) => {
  const stateCoursesCount = state.courses ? (state.courses.length ? state.courses.length : 0) : 0;
  const stateAuthorsCount = state.authors ? (state.authors.length ? state.authors.length : 0) : 0;

  return {
    loading: state.ajaxCallsInProgress > 0,
    coursesCount : stateCoursesCount,
    authorsCount : stateAuthorsCount
  };
};

export default connect(mapStateToProps, {getSession, logout})(App);
