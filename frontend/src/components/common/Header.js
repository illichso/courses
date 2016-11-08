import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading, coursesCount, authorsCount}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/authors" activeClassName="active">Authors ({authorsCount})</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses ({coursesCount})</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/login" activeClassName="active">Login</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  coursesCount: PropTypes.number.isRequired,
  authorsCount: PropTypes.number.isRequired
};

export default Header;
