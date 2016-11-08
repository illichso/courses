import React, {PropTypes} from 'react';
import toastr from 'toastr';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as authenticationActions from "../../actions/authenticationActions";
import LoginForm from './LoginForm';

class LoginPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      credentials: {login: "", password: ""},
    };

    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
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
    this.props.actions.login(login, password).then(() => {
      // redirectAfterSuccess(getState);
      toastr.success("Login success!");
    }).catch(error => toastr.error(error));
  }

  /* redirectAfterSuccess(getState) {
   let redirect = getState().routing.locationBeforeTransitions.query.redirect;
   redirect ? browserHistory.push(redirect) : browserHistory.push("/");//reads query params of redirect
   }*/

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
  actions: PropTypes.object
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
