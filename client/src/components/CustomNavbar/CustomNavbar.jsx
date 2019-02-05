import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './CustomNavbar.css'

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar bg="Light">
                <Navbar.Brand href="/">
                    <img src="assets/logo-tutor.png" className="d-inline-block align-top" alt="Tutor logo goes here" id="tutor-logo" />
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default CustomNavbar;