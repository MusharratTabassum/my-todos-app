import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Navigation = () => {
    const { user, logout, name } = useAuth();

    return (
        <div>
            <Navbar variant="dark" style={{ backgroundColor: "rgb(58, 0, 83)", color: "white" }} sticky="top" collapseOnSelect expand="lg" >
                <Container fluid>
                    <Link style={{ fontWeight: "800", fontSize: "25px" }} className="navbar-brand ms-1 " to="/">
                        <span style={{ fontWeight: "900", fontSize: "45px" }} >M</span>yTodos
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav-links nav-text" style={{ fontWeight: "800", fontSize: "20px", backgroundColor: "rgb(58, 0, 83)", color: "white" }} as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className="header" style={{ fontWeight: "800", fontSize: "20px" }} >
                            {user?.email ?
                                <Button onClick={logout} style={{ color: "white", backgroundColor: "rgb(58, 0, 83)", border: "none" }} variant="light">Logout</Button> :
                                <Nav.Link style={{ fontWeight: "800", fontSize: "20px", backgroundColor: "rgb(58, 0, 83)", color: "white" }} as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav.Link>
                        <Navbar.Text>
                            <Link to="/" style={{ backgroundColor: "rgb(58, 0, 83)", color: "white" }} >{user?.displayName || name.displayName}</Link>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;