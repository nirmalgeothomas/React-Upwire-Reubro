import React from 'react'
import { IconContext } from 'react-icons/lib';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'
import img1 from '../../images/logo.png'
import { DropdownButton, MobileIcon, NavItem, NavLinks, NavLogo } from './Navbar.elements';
import { Dropdown } from 'bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../globalStyles';

function Navbar1() {
  return (
    <>
    <IconContext.Provider value={{ color: 'black' }}>
    <Navbar bg="" variant="" expand="lg" className="flex justify-content-between" >
        <Navbar.Brand href="#home" className='px-4 md:px-6 mr-auto'>
            <NavLogo to='/'  >
                <img src={img1}  style={{width:"50%"}} />
            </NavLogo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className=" justify-content-end md:m-5 ">
                <Nav className="gap-2 mb-3 md:mb-0 m-3 md:m-0">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Products</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Smart watches</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Mobiles</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Laptops</NavDropdown.Item>
                    </NavDropdown>
            
                    <NavDropdown title="Product" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Smart watches</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Mobiles</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Laptops</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Smart watches</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Mobiles</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Laptops</NavDropdown.Item>
                    </NavDropdown>
           
                    <Nav.Link href="#link">Contact us</Nav.Link>
                    <Nav.Link href="#link">Log In</Nav.Link>
                    <Button className='py-8 px-16 md:px-20 md:py-10 w-auto mr-auto' primary>Get Started</Button>

                </Nav>

            </Navbar.Collapse>
        </Navbar>

    </IconContext.Provider>
    </>

  )
}

export default Navbar1