import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './NoMatch.css';


class NoMatch extends Component {
    render() {
        return (
            <div className="NoMatch">
                <Container fluid>
                    <Row>
                        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Image src="assets/bookmark-neon.png" className="bookmark-neon" Reactstyle style={{ display: 'flex', justifyContent: 'center' }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p className="nomatch-text">...you seem to have reached the back-end.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button href="/" variant="secondary" className="nomatch-button" id="nomatch" size="lg" >Take me home!</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NoMatch;