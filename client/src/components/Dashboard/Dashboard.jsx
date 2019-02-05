import React, { Component } from 'react';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import ResourceCard from '../ResourceCard/ResourceCard';
import resources from '../../resources/resourcesDB.json';
import sortResources from '../../resources/sortResources';

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
            <Container>
                <Row>
                    <Col size="md-3 sm-6">
                        <CardDeck>
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
            </Container>
        )
    }
}

export default Dashboard;