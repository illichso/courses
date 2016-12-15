import React, {Component, PropTypes} from "react";
import toastr from "toastr";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authenticationActions from "../../actions/authenticationActions";
import LoginForm from "./LoginForm";
import {redirectHome} from "../common/Navigation";
import {browserHistory} from "react-router";
import {getEmptyCredentials} from "../../constants/emptyEntities";

class LoginPage extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      credentials:  getEmptyCredentials()
    };

    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.redirectAfterLoginSuccess = this.redirectAfterLoginSuccess.bind(this);
    this.clearCredentials = this.clearCredentials.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.credentials &&
      this.props.credentials.username != nextProps.credentials.username &&
      this.props.credentials.password != nextProps.credentials.password ) {
      // Necessary to populate from when existing author if loaded directly.
      this.setState({credentials: Object.assign({}, nextProps.credentials)});
    }
  }

  componentWillUnmount(){
    this.clearCredentials();
  }

  clearCredentials() {
    this.setState({
      credentials:  getEmptyCredentials()
    });
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials});
  }

  onLogin(event) {
    const {username, password} = this.state.credentials;
    event.preventDefault();
    this.props.actions.login(username, password)
    .then(() => {
      this.redirectAfterLoginSuccess();
      toastr.success("Login success!");
    }).catch(error => {
      this.clearCredentials();
      toastr.error("Login Failed. The username or password may be incorrect.");
      throw(error);
    });
  }

   redirectAfterLoginSuccess() {
    const location = this.props.location;
    if (location.query && location.query.redirect) {
      browserHistory.push(location.query.redirect);
    } else {
      redirectHome();
    }
   }

  render() {
    return (
      <LoginForm credentials={this.state.credentials}
                 onChange={this.onChange}
                 onLogin={this.onLogin}
      />
    );
  }

}

LoginPage.propTypes = {
  actions: PropTypes.object,
  location: PropTypes.object,
  credentials: PropTypes.object
};


function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
