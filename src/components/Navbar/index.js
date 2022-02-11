import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, ExNavLink} from './NavbarElements';

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
                        <ExNavLink
                            href='https://dual-funeral-merch-shop.creator-spring.com/' target='_blank' rel="noreferrer" aria-label='Merch external link'>
                            Merch
                        </ExNavLink>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='showtimes'>Shows</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='credits'>Credits</NavLinks>
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
