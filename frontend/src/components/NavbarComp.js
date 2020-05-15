import React, { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Logout from "./auth/Logout";
import LoginModal from "./auth/LoginModal";

const NavbarComp = () => {
  const { token } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authLinks = (
    <>
      <NavItem>
        <NavLink tag={RouterLink} to="/admin">
          Admin
        </NavLink>
      </NavItem>

      <Logout />
    </>
  );

  const loginLink = (
    <>
      <LoginModal />
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RouterLink} to="/">
          Poledex
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RouterLink} to="#">
                All Studios
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} to="#">
                Studios Map
              </NavLink>
            </NavItem>
            {token ? authLinks : loginLink}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
