import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, CardDeck, Image, Button } from 'react-bootstrap';
import './Home.css';
import Navbar from '../CustomNavbar/CustomNavbar';
import Footer from '../Footer/Footer';
// import RoadmapCards from '../RoadmapCards/RoadmapCards';
import icons from '../RoadmapCards/icons';
import CardsList from '../RoadmapCards/CardsList';
import Swal from 'sweetalert2';

class Home extends Component {
    state = {
        icons,
    };

    showDescription = (image, name, description, url, rgba, $) => {
        console.log(icons);
        Swal.fire({
            background: 'url(/assets/modal.jpg)',
            backdrop: 'rgba (0, 0, 0, .8)',
            imageUrl: image,
            title: name,
            text: description,
            showConfirmButton: false,
            // confirmButtonText: 'See documentation',
            // showConfirmButton: false,
        })
    }

    render() {
        return (
            <Container fluid>
                <Jumbotron fluid>
                    <Navbar />
                    <Row className="show-grid">
                        <Col xs={6} style={{ zIndex: '2' }}>
                            <h1>Hello, students</h1>
                            <h2>Tutor is a <strong>powerful and interactive</strong> way of reinforcing your coding bootcamp knowledge.</h2><br />
                            <h2>In here you’ll find the best tutorials and learning resources that follow your bootcamp program, and will help you along the way. The curated content is updated constantly by the users of this platform.</h2><br />
                            <Row className="login">
                                <Col className="lets-go-btn">
                                    <Button href="/login" variant="secondary" className="login-button" id="loginbutton" size="lg" block>Let's Go!</Button>
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
                            <h2 className="roadmap">The bootcamp’s full-stack developer roadmap.</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <p className="roadmap-description">
                                Welcome to the bootcamp! Throughout the entire program you'll be introduced to all these new technologies (and much more tools in-between), you'll laugh, you'll sometimes be in awe and eventually you'll cry.
                                It will be overwhelming and frustrating from day one until you finish, but DON'T panic! Learning how to code is something that takes dedication and a lot of continuous effort. By the end of the program you'll find out you have learnt a lot and you’ll be very proud of yourself.
                                With that said, welcome to tutor. In here you’ll find a curated collection of the most useful and proved resources out there that closely follow the coding bootcamp program, those that the TA’s and professors recommend and talk about during the sessions. And don’t worry about losing track of them, you’ll be able to save them by topic and week in your own user profile as well as rate them by relevance and of course add some of your own. Enjoy!
                            </p>
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
                                name={icons.name}
                                description={icons.text}
                                url={icons.link}
                                showDescription={this.showDescription}
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