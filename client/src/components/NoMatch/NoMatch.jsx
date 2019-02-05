import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './NoMatch.css';


class NoMatch extends Component {
    render() {
        return (
            <div className="NoMatch">
                <Container fluid>
                    <Row>
                        <Col style={{ display: 'flex', justifyContent:'center', alignItems:'center', width: '100%' }}>
                            <Image src="assets/bookmark-neon.png" className="bookmark-neon" Reactstyle style={{display: 'flex', justifyContent: 'center'}} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NoMatch;