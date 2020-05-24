import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "./Logout";
import LoginModal from "./LoginModal";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const authLinks = (
    <>
      <nav>
        <NavLink to="/admin" className="admin-link">
          ADMIN PAGE
        </NavLink>
        <Logout />
      </nav>
    </>
  );

  const loginLink = (
    <>
      <LoginModal />
    </>
  );

  return (
    <footer>
      <div className="footer-root">
        {isAuthenticated ? authLinks : loginLink}
      </div>
    </footer>
  );
};

export default Footer;
