import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

const LoginModal = ({ isAuthenticated, error, login, clearErrors }) => {
  const InitialState = {
    email: "",
    password: "",
  };
  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState(null);
  const [user, setUser] = useState(InitialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      console.log("User successfully logged in");
      login(user);
      setUser(InitialState);
    }
  };

  useEffect(() => {
    // Check for register error
    if (error.id === "LOGIN_FAIL") {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
  }, [error, isAuthenticated]);

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button value="Login" type="submit">
          Log-in
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
