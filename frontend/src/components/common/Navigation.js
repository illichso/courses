import React, {PropTypes} from "react";
import {Link} from "react-router";
import {VisibleToUser} from "../../accessors/accessors";

const Navigation = ({loading, coursesCount, authorsCount, onLogout}) => {
  return (
    <div>
      <AuthedLink to="/" label={`Home`}/>
      <AuthedLink to="/authors" label={`Authors (${authorsCount})`}/>
      <AuthedLink to="/courses" label={`Courses (${coursesCount})`}/>
      <AuthedLink to="/about" label={`About`}/>
      <LogoutLink to="/" label="Logout" onClick={onLogout} />
    </div>);
};

const AuthedLink = VisibleToUser(({onClick, to, label}) => {
  return (
        <Link onClick={onClick}
              activeClassName={null}
              to={to}>{`${label} | `}</Link>
          );
});

const LogoutLink = VisibleToUser(({onClick, to ="#", label}) => {
  return (
        <Link onClick={onClick}
              to={to}>{label}</Link>
          );
  });

Navigation.propTypes = {
  loading: PropTypes.bool.isRequired,
  coursesCount: PropTypes.number.isRequired,
  authorsCount: PropTypes.number.isRequired,
  onLogout: React.PropTypes.func.isRequired
};

export default Navigation;
