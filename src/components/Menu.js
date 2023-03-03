import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const Menu = () => {
  return (
    <NavDropdown title="Categories" id="categories">
      <NavDropdown.Item as={Link} to="/category/laptop">
        Laptop
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/category/desktop">
        Desktop
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/category/tablet">
        Tablet
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default Menu;
