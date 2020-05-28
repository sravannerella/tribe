import React from 'react';
import {Navbar, Nav, NavbarBrand, NavLink} from 'react-bootstrap';
import PropTypes from 'prop-types';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

const Header = (props) => {
    const { imgLogo } = props;
    
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <NavbarBrand href="#home">
                    <img
                        src={imgLogo}
                        className="d-inline-block logo align-top"
                        alt="tribe logo"
                    />
                </NavbarBrand>

                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink href="/">Browse Talent</NavLink>
                        <NavLink href="/jobs">Job search</NavLink>
                    </Nav>
                </NavbarCollapse>

            </Navbar>
        </>
    )
}

Header.defaultProps = {
    imgLogo: ''
}

Header.propTypes = {
    imgLogo: PropTypes.any.isRequired
}

export default Header;
