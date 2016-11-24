import React, {Component, PropTypes} from 'react';
import toastr from 'toastr';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as authenticationActions from "../../actions/authenticationActions";
import LoginForm from './LoginForm';
import {browserHistory} from 'react-router';

class LoginPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      credentials: {login: "", password: ""},
    };

    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.redirectAfterSuccess = this.redirectAfterSuccess.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials});
  }

  onLogin(event) {
    const {login, password} = this.state.credentials;
    event.preventDefault();
    this.props.actions.login(login, password)
    .then(() => {
      this.redirectAfterSuccess();
      toastr.success("Login success!");
    }).catch(error => {
      console.log(error);
      toastr.error(error);
      throw(error);
    });
  }

  onLogout(event) {
    event.preventDefault();
    this.props.actions.logout().then(() => {
      // redirectAfterSuccess(getState);
      toastr.success("Logout success!");
    }).catch(error => toastr.error(error));
  }

   redirectAfterSuccess() {
    const location = this.props.location;
    if (location.query && location.query.redirect) {
      browserHistory.push(location.query.redirect);
    } else {
      browserHistory.push('/');
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
  location: PropTypes.object
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
