import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import { login } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

const LoginModal = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState(null);
  const [user, setUser] = useState(initialState);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    dispatch(clearErrors());
    setModal(!modal);
  }, [modal, dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      dispatch(login(user));
      setUser(initialState);
    }
  };

  useEffect(() => {
    // Check for register error
    if (error.id === "LOGIN_FAIL") {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
    // If authenticated, close modal
    if (modal) {
      if (isAuthenticated) {
        handleToggle();
      }
    }
  }, [error, handleToggle, isAuthenticated, modal]);

  return (
    <>
      <Button size="sm" color="dark" onClick={handleToggle}>
        Admin Login
      </Button>

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Login</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                value={user.email}
                onChange={handleInputChange}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                value={user.password}
                onChange={handleInputChange}
              />

              <Button
                value="Save"
                type="submit"
                size="sm"
                outline
                color="success"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default LoginModal;
