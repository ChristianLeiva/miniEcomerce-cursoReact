import React from "react";
import { Row, Col, NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';
import { ShopingCart } from "./ShopingCart/ShopingCart";

export const HeaderApp = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">E-comerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <ShopingCart />
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
};