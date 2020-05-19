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
import Logout from "../Auth/Logout";
import LoginModal from "../Auth/LoginModal";

const NavBar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
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
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RouterLink} to="/studioslist">
                All Studios
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} to="/studiosmap">
                Studios Map
              </NavLink>
            </NavItem>
            {isAuthenticated ? authLinks : loginLink}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
