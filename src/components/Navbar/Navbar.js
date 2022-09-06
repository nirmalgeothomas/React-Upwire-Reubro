import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import img1 from '../../images/logo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import './style.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <img src={img1} style={{width:"50%"}}/>
              
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
              <NavLinks to='/Home' onClick={closeMobileMenu}>
                Home
                </NavLinks>
                
              </NavItem>
              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}>
                  About Us
                </NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to="/"  >
                <DropdownButton id="dropdown-basic-button" className='dropbutton'  title="Core Customers">
                  <Dropdown.Item href="#/action-1 " to='/' onClick={closeMobileMenu}>Dummy 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" to='/' onClick={closeMobileMenu}>Dummy 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" to='/' onClick={closeMobileMenu}>Dummy 3</Dropdown.Item>
                </DropdownButton>
              </NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to='/' >
                <DropdownButton id="dropdown-basic-button" className='dropbutton' title="Product">
                  <Dropdown.Item href="#/action-1">Dummy 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Dummy 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Dummy 3</Dropdown.Item>
                </DropdownButton>
                </NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to='/' onClick={closeMobileMenu}>
                <DropdownButton id="dropdown-basic-button" className='dropbutton' title="Services">
                  <Dropdown.Item href="#/action-1">Dummy 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Dummy 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Dummy 3</Dropdown.Item>
                </DropdownButton>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  Contact Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  Login
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>Get Started</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                     Get Started
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
