import React, {Component, PropTypes} from "react";
import toastr from "toastr";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authenticationActions from "../../actions/authenticationActions";
import LogoutForm from "./LogoutForm";

class LogoutPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(event) {
    event.preventDefault();
    this.props.actions.logout().then(() => {
      // redirectAfterSuccess(getState);
      toastr.success("Logout success!");
    }).catch(error => toastr.error(error));
  }


  render() {
    return (
      <LogoutForm onLogout={this.onLogout}
      />
    );
  }

}

LogoutPage.propTypes = {
  actions: PropTypes.object
};


function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
