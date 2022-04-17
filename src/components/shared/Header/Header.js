import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo1 from '../../../images/logo (1).png'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogOut = () => {
        signOut(auth);
        navigate('/home')
    }

    return (
        <div>
            <Navbar style={{ 'backgroundColor': '#cc8809' }} collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img className='rounded h-100 w-100' src={logo1} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-light fw-bold' as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/service">SERVICE</Nav.Link>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/clientele">CLIENTELE</Nav.Link>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/blog">BLOG</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/contact">CONTACT</Nav.Link>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/aboutMe">ABOUT ME</Nav.Link>
                            {
                                user
                                    ?
                                    <button className='btn btn-link text-white fw-bold text-decoration-none' onClick={handleLogOut}>Log out</button>
                                    :
                                    <Nav.Link className='text-light fw-bold' as={Link} to="/logIn">LOG IN</Nav.Link>
                            }

                        </Nav>
                        <Nav className='me-auto'>
                            {
                                user &&
                                <>
                                    <Nav.Link className='fw-bold text-light'>{user?.displayName} </Nav.Link>
                                    <Navbar.Brand>
                                        <img style={{ 'borderRadius': '50%', 'maxHeight': '50px' }} src={user?.photoURL} alt="" />
                                    </Navbar.Brand>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;