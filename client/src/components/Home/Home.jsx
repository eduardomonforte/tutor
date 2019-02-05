import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, CardDeck, Card, /*Link*/ } from 'react-bootstrap';
import './Home.css';
import Navbar from '../CustomNavbar/CustomNavbar';
import Footer from '../Footer/Footer';
// import RoadmapCards from '../RoadmapCards/RoadmapCards';


class Home extends Component {
    render () {
        return (
            <Container fluid>
                <Jumbotron fluid>
                    <Navbar />
                        <Row className="show-grid text-justify">
                            <Col xs={6}>
                            <h1>Hello, userName</h1>
                            <h2>Tutor is a <strong>powerful and interactive</strong> way of reinforcing your coding bootcamp knowledge.</h2><br/>
                            <h2>In here you’ll find the best tutorials and learning resources that follow your bootcamp program, and will help you along the way. The curated content is updated constantly by the same users of this platform.</h2><br/>
                            <h2>Because coding is a collaborative work, you’ll be able to mark any topic and schedule a session where other users can join and go through the content together.</h2>
                                <Row className="login">
                                <Col>
                                    {/* <Link to="/dashboard"> */}
                                        <Button className="button" size="lg" block>Let's Go!</Button>
                                    {/* </Link> */}
                                </Col>
                                <Col xs={7}>
                                    <p>After clicking the button, you’ll be taken to an external authentication site to sign up/login. By signing up you agree to our Privacy Policy & Terms of Service. </p>
                                </Col>
                                </Row>
                            </Col>
                            <Col xs={5}>
                                <Image src="assets/coding-hands.png" className="coding-hands" Reactstyle />    
                            </Col>
                        </Row>
                </Jumbotron>
                <Row>
                    <Col>
                        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center' }}>
                            <h2 className="roadmap">The bootcamp’s fullstack developer roadmap.</h2>
                        </div>
                        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center' }}>
                            <p className="roadmap-description">It's all a game of angles. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. We don't need any guidelines or formats. All we need to do is just let it flow right out of us.
                            No pressure. Just relax and watch it happen. It's a good way of getting rid of all your anxieties and hostilities. We have no limits to our world. We're only limited by our imagination. Here's another little happy bush Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit of Sap Green. Work on one thing at a time. Don't get carried away - we have plenty of time.</p>
                        </div>  
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardDeck>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/github-icon.svg" style={{ height: '150px'}} />
                                <Card.Footer>Github</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/git-icon.svg" style={{ height: '150px'}} />
                                <Card.Footer>Git</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/html-5.svg" style={{ height: '150px'}} />
                                <Card.Footer>HTML 5</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/css-3.svg" style={{ height: '150px'}} />
                                <Card.Footer>CSS 3</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/bootstrap.svg" style={{ height: '150px'}} />
                                <Card.Footer>Bootstrap</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/javascript.svg" style={{ height: '150px'}} />
                                <Card.Footer>Javascript</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/jquery.svg" style={{ height: '150px'}} />
                                <Card.Footer>Jquery</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/firebase.svg" style={{ height: '150px'}} />
                                <Card.Footer>Firebase</Card.Footer>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardDeck>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/nodejs-icon.svg" style={{ height: '150px'}} />
                                <Card.Footer>Node.js</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/mysql.svg" style={{ height: '150px'}} />
                                <Card.Footer>MySQL</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/express.svg" style={{ height: '150px'}} />
                                <Card.Footer>Express</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/handlebars.svg" style={{ height: '150px'}} />
                                <Card.Footer>Handlebars</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/sequelize.svg" style={{ height: '150px'}} />
                                <Card.Footer>Sequelize</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/mongodb.svg" style={{ height: '150px'}} />
                                <Card.Footer>Mongo</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/wordpress-icon.svg" style={{ height: '150px'}} />
                                <Card.Footer>Wordpress</Card.Footer>
                            </Card>
                            <Card className="card" style={{ height: '200px', width: '100%' }}>
                                <Card.Img src="assets/SVG/react.svg" style={{ height: '150px'}} />
                                <Card.Footer>React</Card.Footer>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>

                    {/* {this.state.friends.map(friend => (
                        <Col size="md-3 sm-6">
                            <RoadmapCards
                            key={friend.id}
                            // handleClick={this.handleClick}
                            id={friend.id}
                            image={friend.image}
                            />
                        </Col>
                    ))} */}                 
            <Footer />
            </Container>
        );
    }
}

export default Home;