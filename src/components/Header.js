import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <Navbar bg="light" variant="light">
                <Container>
                    {/* <Navbar.Brand href="#home">Find My Resto</Navbar.Brand> */}
                    <Link className="navbar-brand" to="/">Find My Resto</Link>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
 
      
    )
}
