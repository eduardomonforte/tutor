import React from "react";
import { Card, Button, Col, Row } from 'react-bootstrap';
import "../RoadmapCards/RoadmapCards";
import './ResourceCard.css';
import './assets';

function ResourceCard(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <Card.Img variant="top" src= {props.thumbnail} style={{ height: '180px' }} />
        </a>
          {/* <Card.img src= { props.image } style={{ height: '50px' }} /> */}
        <Card.Body>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <Card.Title className="card-title">{props.title}</Card.Title>
          </a>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row className="no-gutters">
            <Col>
              <Button className="bookmark-button" alt="bookmark">
                <svg id="bookmark-icon" viewBox="0 0 120.88 163.85">
                  <path d="M107.31,2.12H13.57A12.41,12.41,0,0,0,1.16,14.53v97.88h0v37.16a12.15,12.15,0,0,0,20.63,8.72l.16-.14,31.7-27.45h0a12.19,12.19,0,0,1,13.59,0l31.69,27.45.16.14a12.15,12.15,0,0,0,20.63-8.72v-135A12.41,12.41,0,0,0,107.31,2.12Z" />
                </svg>
              </Button>
            </Col>
            <Col>
              <p className="karma">Rating: {props.rating} </p>
            </Col>
            <Col>
              <Button className="upvote-button" alt="upvote" onClick={props.upvote} >
                <svg id="upvote-icon" viewBox="0 0 448 512">
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
                </svg>
              </Button>
              <Button className="downvote-button" alt="downvote" onClick={props.downvote} >
                <svg id="downvote-icon" viewBox="0 0 448 512">
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z" />
                </svg>
              </Button>
            </Col>
          </Row>
          {/* // <img className="bookmark-icon" alt="bookmark" src="/assets/tutor-bookmark.png" width="auto" height="40px" />
            // <small className="card-karma">Karma: {props.rating}</small>
            // <span className="button-container" height="30px">
            //   <Button variant="danger" className="justify-content-right">-</Button><Button variant="success" className="justify-content-right">+</Button>
            </span> */}
        </Card.Footer>
      </Card>
    </div>
  );
}
export default ResourceCard;