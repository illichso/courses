import React, {PropTypes, Component} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends Component {
  render () {
    return (
      <div className="container-fluid">
        <Header
           loading={this.props.loading}
           coursesCount={this.props.coursesCount}
           authorsCount={this.props.authorsCount}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  coursesCount: PropTypes.number.isRequired,
  authorsCount: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ajaxCallsInProgress > 0,
    coursesCount : state.courses.length,
    authorsCount : state.authors.length
  };
};

export default connect(mapStateToProps)(App);
