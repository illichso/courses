import React, {Component, PropTypes} from 'react';
import {redirectToLoginWithMessage} from '../../reducers/authenticationReducer';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

export class PrivateRoute extends Component {
  constructor(props, context) {
    super (props, context);
    this.state = {
      loading: Object.assign({}, this.props.authentication.loading),
      isAuthenticated: Object.assign({}, this.props.authentication.isAuthenticated)
    };
  }

  componentDidMount() {
    this.redirectIfNotLogged(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.redirectIfNotLogged(nextProps);
  }

  redirectIfNotLogged(props) {
    const {loading, isAuthenticated} = props;
    if (loading === false && !isAuthenticated) {
      this.props.redirectToLoginWithMessage('login.error.private');
    }
  }

  render() {
      const {loading, isAuthenticated} = this.props;
      if (loading || !isAuthenticated) {
        return (
          <div className="center loader">
            <div>Loading...</div>
          </div>
        );
      }
      return(<div {...this.props} />) ;
    }
}

PrivateRoute.propTypes = {
  redirectToLoginWithMessage: PropTypes.func.isRequired,
  authentication: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

//Pull in the React Router context so router is avaliable on this.context.router
PrivateRoute.contextTypes = {
  router: PropTypes.object
};


const mapStateToProps = state => {
  return {
    loading: state.authentication.loading,
    isAuthenticated: state.authentication.isAuthenticated
  };
};


// const mapStateToProps = state => ({
//   loading: state.authentication.loading,
//   isAuthenticated: state.authentication.isAuthenticated
// });




const mapDispatchToProps = {
  redirectToLoginWithMessage
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));
