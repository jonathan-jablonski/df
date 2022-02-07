import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
  return(
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Dual Funeral</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='merch'>Merch</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='showtimes'>Shows</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/inquiries'>Inquiries</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  ) 
};

export default Navbar;
