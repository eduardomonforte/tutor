import React, { Component } from 'react';
import { Navbar, Nav, Col, } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
    render() {
        return (

            <Navbar className="footer">
                <Col xs={3}>
                    <Navbar.Brand href="/" className="icon-bw">
                        <img src="assets/logo-tutor-bw.png" alt="Tutor logo goes here" id="tutor-logo-bw" />
                    </Navbar.Brand>
                </Col>
                <Col xs={6} className="footer-text">
                    <p className="copyright">Made with care by bootcamp students for bootcamp students.</p>
                </Col>
                <Col xs={3}>
                    <Nav className="navbar-nav">
                        <Nav.Link href="/Terms">Terms</Nav.Link>
                        {/* <Nav.Link href="/NoMatch">About</Nav.Link> */}
                        <Nav.Link href="/NoMatch">FAQs</Nav.Link>
                    </Nav>
                </Col>
            </Navbar>

        );
    }
}

export default Footer;