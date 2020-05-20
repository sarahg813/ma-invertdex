import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import Logout from "../Auth/Logout";
import LoginModal from "../Auth/LoginModal";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
`;

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const authLinks = (
    <>
      <nav>
        <NavLink to="/admin">Admin</NavLink>
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
    <FooterContainer>
      <Container>{isAuthenticated ? authLinks : loginLink}</Container>
    </FooterContainer>
  );
};

export default Footer;
