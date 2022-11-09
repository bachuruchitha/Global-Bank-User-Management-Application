import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  Button,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate=useNavigate();
  return (
    <Navbar color="light" light expand="lg">
      <NavbarBrand href="/"></NavbarBrand>
      <NavbarToggler
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/register">
              Signup
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      {(localStorage.getItem("customer_number")) && (
        <Button className="m-2" style={{ display: "block", float: "right" }} onClick={(e)=>{localStorage.removeItem("customer_number");
        navigate("/login")}}>
          Logout
        </Button>
      )}
    </Navbar>
  );
};

export default Header;
