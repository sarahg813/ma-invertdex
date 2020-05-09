import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const Logout = ({ logout }) => {
  return (
    <div>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default connect(null, { logout })(Logout);
