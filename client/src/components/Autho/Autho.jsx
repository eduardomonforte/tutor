import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Autho.css';


class Autho extends Component {
    render() {
        return (
            <div className="Autho-mockup">
                <Container fluid>
                    <Row>
                        <Col style={{ display: 'flex', justifyContent:'center', alignItems:'center', width: '100%' }}>
                            <Image src="assets/Autho-mockup.png" className="Autho" Reactstyle style={{display: 'flex', justifyContent: 'center'}} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Autho;