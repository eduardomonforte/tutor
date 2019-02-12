import React from "react";
import { Card, Button } from 'react-bootstrap';
import "../RoadmapCards/RoadmapCards";
import './ResourceCard.css';
import './assets';

function ResourceCard (props) {
  return (
    <div>
        <Card style={{ align: 'top', width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px160" style={{ height: '180px' }} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            {/* <Col>
              <Button
            </Col> */}
            <img className="bookmark-icon" alt="bookmark" src="/assets/tutor-bookmark.png" width="auto" height="40px" />
            <small className="card-karma">Rating: {props.rating}</small>
            // <span className="button-container" height="30px">
            // // <Button variant="danger" className="justify-content-right">-</Button><Button variant="success" className="justify-content-right">+</Button>
            </span>
          </Card.Footer>
        </Card>
    </div>
  );
}
export default ResourceCard;