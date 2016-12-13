import React, {PropTypes} from "react";
import {Link} from "react-router";
import LoadingDots from './LoadingDots';
import {AuthedLink} from './AuthedLink';

const Header = ({loading, coursesCount, authorsCount, onLogout}) => {
  return (
    <div>
      <AuthedLink to="/" label={`Home`} useSeparator={true}/>
      <AuthedLink to="/authors" label={`Authors (${authorsCount})`} useSeparator={true}/>
      <AuthedLink to="/courses" label={`Courses (${coursesCount})`} useSeparator={true}/>
      <AuthedLink to="/about" label={`About`} useSeparator={true}/>
      <AuthedLink to="/" label="Logout" onClick={onLogout}/>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  coursesCount: PropTypes.number.isRequired,
  authorsCount: PropTypes.number.isRequired,
  onLogout: React.PropTypes.func.isRequired
};

export default Header;
