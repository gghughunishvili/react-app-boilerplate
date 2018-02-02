import React, { Component } from 'react';
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
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.logoutClickHandler = this.logoutClickHandler.bind(this);
    this.loginClickHandler = this.loginClickHandler.bind(this);
    this.state = {
      isOpen: false,
      isAuthorized: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logoutClickHandler() {
    this.setState({isAuthorized: false});
  }

  loginClickHandler() {
    this.setState({isAuthorized: true});
  }

  render() {
    var showMenu;
    if (!this.state.isAuthorized) {
      showMenu = [
          <NavItem key={1}>
            <NavLink href="/">Register</NavLink>
          </NavItem>,
          <NavItem key={2}>
            <NavLink href="#" onClick={this.loginClickHandler}>Login</NavLink>
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
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {showMenu}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
