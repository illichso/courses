import React from "react";
import {Link} from "react-router";
import {VisibleToUser} from "../../accessors/accessors";

const Navigation = ({onLogout}) => {
  return (
    <div>
      <LogoutLink onClick={onLogout} label="Logout"/>
    </div>);
};

const LogoutLink = VisibleToUser(({onClick, to ="#", label}) => {
  return (
        <Link onClick={onClick}
              to={to}>{label}</Link>
          );
  });

Navigation.propTypes = {
  onLogout: React.PropTypes.func.isRequired
};

export default Navigation;
