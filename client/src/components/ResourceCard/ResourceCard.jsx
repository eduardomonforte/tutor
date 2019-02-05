import React from "react";
import { Card } from 'react-bootstrap';
import "./ResourceCard.css";

const ResourceCard = props => (
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
        <small className="text-muted">Karma: {props.karma}</small>
    </Card.Footer>
  </Card>
);

export default ResourceCard;