import React, { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { setClearResults } from "../../redux/actions/studiosActions";

const NavBar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleAllStudios = () => {
    dispatch(setClearResults());
    toggle();
  };

  return (
    <div role="navigation" aria-label="main navigation">
      <Navbar light expand="md">
        <NavbarBrand tag={RouterLink} to="/">
          poledex
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                tag={RouterLink}
                to="/studioslist"
                onClick={handleAllStudios}
              >
                ALL STUDIOS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} to="/studiosmap" onClick={toggle}>
                STUDIOS MAP
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
