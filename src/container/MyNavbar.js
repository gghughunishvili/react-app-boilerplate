import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class MyNavbar extends Component {

  render() {
    var showMenu;
    if (true) {
      showMenu = [
          <NavItem key={1}>
            <NavLink><Link to="/register">Register</Link></NavLink>
          </NavItem>,
          <NavItem key={2}>
            <NavLink><Link to="/login">Login</Link></NavLink>
          </NavItem>
      ];
    } else {
      showMenu = (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Giorgi
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem>
              Profile
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <NavLink href="#" onClick={this.logoutClickHandler}>Logout</NavLink>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    }

    return (
      <div className="container">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">MyApp</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto" navbar>
              {showMenu}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
