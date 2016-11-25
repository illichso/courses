import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import {VisibleToUser} from "../../accessors/accessors";

const Header = ({loading, coursesCount, authorsCount}) => {
  return (
    <div>
      <AuthedLink to="/" label={`Home`}/>
      <AuthedLink to="/authors" label={`Authors (${authorsCount})`}/>
      <AuthedLink to="/courses" label={`Courses (${coursesCount})`}/>
      <AuthedLink to="/about" label={`About`}/>
      <AuthedLink to="/logout" label={`Logout`}/>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </div>
  );
};

const AuthedLink = VisibleToUser(({onClick, to ="#", label, activeClassName = ""}) => {
  return (
        <Link onClick={onClick}
              activeClassName={activeClassName}
              to={to}>{`${label} | `}</Link>
          );
        });

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  coursesCount: PropTypes.number.isRequired,
  authorsCount: PropTypes.number.isRequired
};

export default Header;
