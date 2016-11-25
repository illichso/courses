import React, {PropTypes} from "react";
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';

const LoginForm = ({credentials, onChange, onLogin}) => {
  return (
    <form>
      <h3>Welcome to courses</h3>
      <TextInput
        name="login"
        label="Username"
        value={credentials.user}
        onChange={onChange}
      />

      <PasswordInput
        type="password"
        name="password"
        label="Password"
        value={credentials.password}
        onChange={onChange}
      />

      <input
        type="submit"
        value="Log In"
        className="btn btn-primary"
        onClick={onLogin}
      />
    </form>
  );
};

LoginForm.propTypes = {
  credentials: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
