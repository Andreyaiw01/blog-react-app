import React from 'react';
import { Navbar, Container, Row, Nav  } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function Header() {
    
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="mr-auto">
                    <Link className='home' to="/">Home</Link>
                </Nav>           
            </Container>
        </Navbar>
        </>
    )
}



