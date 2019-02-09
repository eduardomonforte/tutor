import React from "react";
import { Card, Button } from 'react-bootstrap';
import "../RoadmapCards/RoadmapCards";
import './ResourceCard.css';
import './assets';

const ResourceCard = props => (
  <Card style={{ align: 'top' }}>
    <Card.Img variant="top" src="holder.js/100px160" style={{ height: '180px' }} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <img alt="whatever" src="/assets/tutor-bookmark.png" width="auto" height="40px" />
      <small className="card-karma">Karma: {props.karma}</small>
      <span className="button-container">
        <Button variant="danger">-</Button><Button variant="success">+</Button>
      </span>
    </Card.Footer>
  </Card>
);

export default ResourceCard;