import React from 'react';
import styled from 'styled-components';
// import { NavbarContainer } from './Navbar.style';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Logo from '../../images/Logo/logo.svg'

// Navbar
const Nav = styled.nav`
    /* width: 1920px; */
    height: 80px;
    padding: 24px 120px 27px 97px;
    background-color: #111;
    color: #ffffff;
    text-transform: uppercase;
`;

// Navbar container
const NavContainer = styled.div`
    display: flex;
`;

// Navbar left for branding
const NavLeft = styled.div`
    width: 50%;
    line-height: 80px;
`;

// Div for logo
const NavLogo = styled.div`
    display: flex;
    margin-top: 3px;
    
    img {
    display: flex;
    align-items: center;
    }
`;


const NavRight = styled.div`
    width: 50%;
    line-height: 26px;
`;

const NavRightContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 3px;
`;

const NavRightItems = styled.div`
    width: auto;
`;

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLeft>
                    <NavLogo>
                        <img src = {Logo} alt = 'logo'/>          
                    </NavLogo>
                </NavLeft>        

                <NavRight>
                    <NavRightContainer>
                        <NavRightItems/>introduction
                        <NavRightItems/>solution
                        <NavRightItems/>rate plan
                        <NavRightItems/>|
                        <NavRightItems/>login
                        <NavRightItems/>apply for free use
                    </NavRightContainer>
                </NavRight>
            </NavContainer>
        </Nav>
    )
}

export default Navbar;
