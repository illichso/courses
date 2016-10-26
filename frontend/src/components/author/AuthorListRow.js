import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author, onDelete, deleting}) => {
  return (
      <tr>
        <td><Link to={'/author/' + author.id}>{author.firstName}</Link></td>
        <td><Link to={'/author/' + author.id}>{author.lastName}</Link></td>
        <td><input
          type="submit"
          disabled={deleting}
          value={deleting ? 'Deleting...' : 'Delete'}
          className="btn btn-primary"
          onClick={event => onDelete(event, author)}/>
        </td>
      </tr>
  );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  deleting: PropTypes.bool
};

export default AuthorListRow;
