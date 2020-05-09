import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { register } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

const RegisterModal = ({ register }) => {
  const InitialState = {
    name: "",
    email: "",
    password: "",
  };
  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState(null);
  const [newUser, setNewUser] = useState(InitialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      console.log("New User Registered");
      register(newUser);
      setNewUser(InitialState);
    }
  };

  return (
    <div>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={newUser.email}
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
            value={newUser.password}
            onChange={handleInputChange}
          />
        </div>
        <button value="Register" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);
