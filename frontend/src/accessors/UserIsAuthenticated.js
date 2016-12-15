import {UserAuthWrapper} from "redux-auth-wrapper";
import React, {PropTypes, Component} from "react";
import {Router, Route, withRouter} from "react-router";
import {pushState} from 'redux-router';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

export class accessors extends Component {

        componentWillMount () {
            this.checkAuth(this.props.isAuthenticated);
        }

        componentWillReceiveProps (nextProps) {
            this.checkAuth(nextProps.isAuthenticated);
        }

        checkAuth (isAuthenticated) {
            if (!isAuthenticated) {
                let redirectAfterLogin = this.props.location.pathname;
                this.props
                    .dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
            }
        }

        const UserIsAuthenticated = UserAuthWrapper({
          authSelector: state => state.authentication, // how to get the user state
          failureRedirectPath: "/login",
          wrapperDisplayName: "UserIsAuthenticated", // a nice name for this auth check
          predicate : authentication => authentication.isAuthenticated
        });

        render () {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            );

        }
}

accessors.propTypes = {
    actions: PropTypes.object,
    location: PropTypes.object,
    credentials: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    dispatch: PropTypes.func
};

//Pull in the React Router context so router is avaliable on this.context.router
accessors.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = (state) => ({
    token: state.auth.token,
    userName: state.auth.userName,
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(accessors));
