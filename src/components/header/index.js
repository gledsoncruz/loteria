import React from "react";
import { Navbar } from "react-bootstrap";
import "./styles.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Ganhei na MegaSena</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Navbar>
  );
};

export default Header;
