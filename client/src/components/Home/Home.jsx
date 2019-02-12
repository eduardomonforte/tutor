import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, CardDeck, Image, Button } from 'react-bootstrap';
import './Home.css';
import Navbar from '../CustomNavbar/CustomNavbar';
import Footer from '../Footer/Footer';
// import RoadmapCards from '../RoadmapCards/RoadmapCards';
import icons from '../RoadmapCards/icons';
import CardsList from '../RoadmapCards/CardsList';

class Home extends Component {
    state = {
        icons,
    };

    render() {
        return (
            <Container fluid>
                <Jumbotron fluid>
                    <Navbar />
                    <Row className="show-grid">
                        <Col xs={6} style={{ zIndex: '2' }}>
                            <h1>Hello, userName</h1>
                            <h2>Tutor is a <strong>powerful and interactive</strong> way of reinforcing your coding bootcamp knowledge.</h2><br />
                            <h2>In here you’ll find the best tutorials and learning resources that follow your bootcamp program, and will help you along the way. The curated content is updated constantly by the same users of this platform.</h2><br />
                            <h2>Because coding is a collaborative work, you’ll be able to mark any topic and schedule a session where other users can join and go through the content together.</h2>
                            <Row className="login">
                                <Col className="lets-go-btn">
                                    {/* <Link to="/Autho"> */}
                                        <Button href="/Autho" variant ="secondary" className="login-button" size="lg" block>Let's Go!</Button>
                                    {/* </Link> */}
                                </Col>
                                <Col xs={7} className="disclaimer">
                                    <p className="rogue-text">Clicking the button will sign you up or log you into your account through Auth0.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={5} style={{ zIndex: '1' }}>
                            <Image src="assets/coding-hands.png" className="coding-hands" Reactstyle />
                        </Col>
                    </Row>
                </Jumbotron >
                <Row>
                    <Col xs={12}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <h2 className="roadmap">The bootcamp’s fullstack developer roadmap.</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <p className="roadmap-description">It's all a game of angles. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. We don't need any guidelines or formats. All we need to do is just let it flow right out of us.
                            No pressure. Just relax and watch it happen. It's a good way of getting rid of all your anxieties and hostilities. We have no limits to our world. We're only limited by our imagination. Here's another little happy bush Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit of Sap Green. Work on one thing at a time. Don't get carried away - we have plenty of time.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <CardDeck style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {this.state.icons.map(icons => (
                        <CardsList
                        key={icons.id}
                        id={icons.id}
                        image={icons.image}
                        description={icons.text}
                        name={icons.name}
                        />
                    ))}
                    </CardDeck>
                </Row>
                <Footer />
            </Container >
        );
    }
}

export default Home;