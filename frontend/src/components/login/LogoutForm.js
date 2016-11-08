import React, {PropTypes} from "react";
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';

const LogoutForm = ({onLogout}) => {
  return (
    <form>
      <h1>Logout page</h1>
      <input
        type="submit"
        value="Logout"
        className="btn btn-primary"
        onClick={onLogout}
      />
    </form>
  );
};

LogoutForm.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default LogoutForm;
