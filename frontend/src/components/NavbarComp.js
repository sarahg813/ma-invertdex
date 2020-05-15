import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light fixed expand="md">
        <NavbarBrand>
          <NavLink>
            <Link to="/">Poledex</Link>
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="#">All Studios</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="#">Studios Map</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/admin">Admin</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
