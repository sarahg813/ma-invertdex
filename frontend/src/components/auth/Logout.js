import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { logout } from "../../redux/actions/authActions";

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button outline size="sm" onClick={() => dispatch(logout())}>
        Admin Logout
      </Button>
    </>
  );
};

export default Logout;
