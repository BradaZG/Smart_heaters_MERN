import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar light expand='md'>
        <Link className='navbar-brand' to='/'>
          SMART HEATERS
        </Link>
        <NavbarToggler onClick={toggleHandler}></NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className='ml-auto'>
            <NavItem>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/add'>
                Add Heater
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
