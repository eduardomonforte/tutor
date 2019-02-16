import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, CardDeck, Button } from 'react-bootstrap';
import Navbar from '../CustomNavbar/CustomNavbar';
import Footer from '../Footer/Footer';
import ResourceCard from '../ResourceCard/ResourceCard';
import UserDropdown from "../UserDropdown/UserDropdown"
import resources from '../../resources/resourcesDB.json';
import icons from "../RoadmapCards/icons.json";
import sortResources from '../../resources/sortResources';
import Icons from "../RoadmapCards/RoadMapIcons";
import './Dashboard.css';
import Swal from 'sweetalert2';

const dropArray = [
    {
        "week": "WEEK 0: My Bookmarks ",
        "id": 0
    },
    {
        "week": "WEEK 1: HTML + Git + CSS ",
        "id": 1
    },
    {
        "week": "WEEK 2: CSS-Bootstrap ",
        "id": 2
    },
    {
        "week": "WEEK 3: Javascript ",
        "id": 3
    },
    {
        "week": "WEEK 4: JQuery ",
        "id": 4
    },
    {
        "week": "WEEK 5: Timers ",
        "id": 5
    },
    {
        "week": "WEEK 6: Ajax ",
        "id": 6
    },
    {
        "week": "WEEK 7: Firebase ",
        "id": 7
    },
    {
        "week": "WEEK 8: Project 1 ",
        "id": 8
    },
    {
        "week": "WEEK 9: Portfolio update ",
        "id": 9
    },
    {
        "week": "WEEK 10: Node.js ",
        "id": 10
    },
    {
        "week": "WEEK 11: Javascript Constructors ",
        "id": 11
    },
    {
        "week": "WEEK 12: MySQL ",
        "id": 12
    },
    {
        "week": "WEEK 13: Express ",
        "id": 13
    },
    {
        "week": "WEEK 14: Handlebars ",
        "id": 14
    },
    {
        "week": "WEEK 15: Sequelize ",
        "id": 15
    },
    {
        "week": "WEEK 16: Project 2 ",
        "id": 16
    },
    {
        "week": "WEEK 17: Mongo + Mongoose ",
        "id": 17
    },
    {
        "week": "WEEK 18: React ",
        "id": 18
    },
    {
        "week": "WEEK 19: Wordpress ",
        "id": 19
    },
    {
        "week": "WEEK 20: Java ",
        "id": 20
    },
    {
        "week": "WEEK 21: Project 3 ",
        "id": 21
    }
];

class Dashboard extends Component {
    state = {
        resources,
        icons,
        dropArray,
        subject: "Please select a subject. "
    };

    whenClicked = (week) => {
        console.log('Week selected: ', week);
        this.setState({ subject: week.week });
        // console.log("index: " + this.state.dropArray.index)
    };

    addResource = () => {
        console.log('Resource added.');
        Swal.fire({
            type: 'info',
            title: 'Resource added!',
            text: "...just kidding, we're still working on this."
        })

    }

    upvote = (id) => {
        console.log('Updvote registered')  
    //   this.state.resources.forEach(resource => {
    //       console.log('RESOURCE HERE ====>>> ', resource.rating)
    //   })

    }

    downvote = () => {
        console.log('Downvote registered.');
    }

    // signOut = () => {
    //     Swal.fire({
    //         type: 'info',
    //         title: 'You were swallowed by a black hole!',
    //         text: "Sorry about that, it looks like we broke the space-time continuum."
    //     })
    // }

    voteRecorded = () => {
        Swal.fire({
            type: 'success',
            title: 'You were swallowed by a black hole!',
            text: "Sorry about that, it looks like we broke the space-time continuum."
        })
    }

    handleSort = (resources) => {
        let sortedResources = sortResources(resources);
        this.setState({ resources: sortedResources });
    };

    componentDidMount() {
        this.handleSort(this.state.resources)
        console.log(resources)
    };

    render() {
        return (
            <Container fluid>
                <Jumbotron fluid>
                    <Navbar />
                    <Row className="show-grid">
                        <Col xs={6} >
                            <h1>Hello, janeDoe</h1>
                            <h2>Ok, we know your name is not really janeDoe. But hey, what can we say? We're on it, kind anonymous user. By the end of the week this will show your actual username.</h2>
                        </Col>
                        <Col xs={5} style={{ zIndex: '1' }}>
                            <Image src="assets/tag-image.png" className="tag-image" Reactstyle />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} className="dropdown">
                            <UserDropdown dropArray={this.state.dropArray} key={this.state.dropArray.index} subject={this.state.subject} whenClicked={this.whenClicked} />
                        </Col>
                        <Col xs={2}>
                            <Button className="Add-resource" variant="secondary" size="lg" block onClick={this.addResource}>Add Resource</Button>
                        </Col>
                        <Col xs={{ span: 2, offset: 3 }}>
                            <Button href="http://localhost:3001/logout" className="logout-button" variant="secondary" size="lg" block>Sign Out</Button>
                        </Col>
                    </Row>
                </Jumbotron>
                <Row xs={12} className="icon-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'top' }}>
                    {this.state.icons.map(icon => (
                        <Icons
                            key={icon.id}
                            image={icon.image}
                        />
                    ))}
                </Row>
                <Row>
                    <CardDeck style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', width: '100%' }}>
                        {this.state.resources.map(resource => (
                            <ResourceCard
                                key={resource.id}
                                thumbnail={resource.thumbnail}
                                image={icons.image}
                                title={resource.name}
                                description={resource.description}
                                rating={resource.rating}
                                url={resource.url}
                                upvote={this.upvote}
                                downvote={this.downvote}
                            />
                        ))}
                    </CardDeck>
                </Row>
                <Footer />
            </Container >
        )
    }
}

export default Dashboard;