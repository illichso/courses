import React from "react";
import {Link} from "react-router";
import {VisibleToUser} from "../../accessors/accessors";

const Navigation = ({onLogout}) => {
  return (
    <div className="container-fluid">
      <AdminNavigationLink onClick={onLogout} label="Logout"/>
    </div>);
};

const AdminNavigationLink = VisibleToUser(({onClick, to ="#", label, activeClassName = ""}) => {
  const onClickFunction = onClick ? onClick : null;
  return (
        <Link onClick={onClickFunction}
              className="blog-nav-item"
              activeClassName={activeClassName}
              to={to}>{label}</Link>
          );
    });

Navigation.propTypes = {
  onLogout: React.PropTypes.func.isRequired
};

export default Navigation;
