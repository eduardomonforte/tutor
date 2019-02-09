import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import './RoadmapCards.css';

function Cards(props) {
    return (
        <div>
        <CardDeck>
            <Card style={{width: '20rem'}}>
                <img src= {props.image} alt="card" className="card-img" style={{ height: '180px'}} />
            <Card.Title className="title">{props.name}</Card.Title>
            <Card.Text className="description">{props.description}</Card.Text>
            {/* <Card.Link className="link">React</Card.Link> */}
            <Card.Footer>
                {props.name}
            </Card.Footer>
            </Card>
        </CardDeck>
        </div>
    )
}

export default Cards;