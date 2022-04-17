import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar style={{'backgroundColor' : '#cc8809'}} collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Shawon Legal Consultant</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/service">SERVICE</Nav.Link>
                            <Nav.Link as={Link} to="/clientele">CLIENTELE</Nav.Link>
                            <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
                            <Nav.Link as={Link} to="/aboutMe">ABOUT ME</Nav.Link>
                            <Nav.Link as={Link} to="/signIn">SIGNIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;