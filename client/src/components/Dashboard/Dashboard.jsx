import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, CardDeck } from 'react-bootstrap';
import Navbar from '../CustomNavbar/CustomNavbar';
import Footer from '../Footer/Footer';
import ResourceCard from '../ResourceCard/ResourceCard';
import UserDropdown from "../UserDropdown/UserDropdown"
import resources from '../../resources/resourcesDB.json';
import sortResources from '../../resources/sortResources';
import './Dashboard.css';

class Dashboard extends Component {
    state = {
        resources
    };

    handleSort = (resources) => {
        let sortedResources = sortResources(resources);
        this.setState({ resources: sortedResources });
    };

    componentDidMount() {
        this.handleSort(this.state.resources)
        console.log(resources)
    }

    render() {
        return (
            <Container fluid>
                <Jumbotron fluid>
                    <Navbar />
                    <Row className="show-grid text-justify">
                        <Col xs={6}>
                            <h1>Hello, janeDoe</h1>
                            <h2>Now we don't want him to get lonely, so we'll give him a little friend. Brown is such a nice color. We'll paint one happy little tree right here. Decide where your cloud lives. Maybe he lives right in here. I think there's an artist hidden in the bottom of every single one of us. Just let these leaves jump off the brush</h2>
                            <UserDropdown />
                        </Col>
                    </Row>
                </Jumbotron>
                <Row>
                    <Col xs={12}>
                        <CardDeck style={{ display: 'flex', justifyContent: 'center', alignItems: 'top' }}>
                            {this.state.resources.map(resource => (
                                <ResourceCard
                                    key={resource.id}
                                    name={resource.name}
                                    description={resource.description}
                                    karma={resource.karma}
                                />
                            ))}
                        </CardDeck>
                    </Col>
                </Row>
                <Footer />
            </Container >
        )
    }
}

export default Dashboard;