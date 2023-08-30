import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
/**
* @author
* @function Header
**/

export const Header = (props) => {
  return(
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
        {/* <Navbar.Brand href="#home">Admin Dashbord</Navbar.Brand> */}
        <Link to={'/'} className='navbar-brand'>Admin Dashbord</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Separated link
                </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
                <li className='nav-item'>
                    <NavLink className={'nav-link'} to={'/signin'}>Signin</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className={'nav-link'} to={'/signup'}>Signup</NavLink>
                </li>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
   )

 }