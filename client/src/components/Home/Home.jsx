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