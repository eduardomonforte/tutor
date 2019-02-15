import React from "react";
import { Card, Button, Col, Row } from 'react-bootstrap';
import "../RoadmapCards/RoadmapCards";
import './ResourceCard.css';
import './assets';

function ResourceCard(props) {
  return (
    <div>
      <Card style={{ align: 'top', width: '18rem' }}>
        <Card.Img variant="top" src="assets/NoMatch-background.png" style={{ height: '180px' }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row className="no-gutters">
            <Col>
              <Button className="bookmark-button" alt="bookmark">
                <svg id="bookmark-icon" viewBox="0 0 120.88 163.85">
                  <path d="M107.31,2.12H13.57A12.41,12.41,0,0,0,1.16,14.53v97.88h0v37.16a12.15,12.15,0,0,0,20.63,8.72l.16-.14,31.7-27.45h0a12.19,12.19,0,0,1,13.59,0l31.69,27.45.16.14a12.15,12.15,0,0,0,20.63-8.72v-135A12.41,12.41,0,0,0,107.31,2.12Z" fill="#ef233c" />
                </svg>
              </Button>
            </Col>
            <Col>
              <p className="karma">Karma: {props.rating} </p>
            </Col>
            <Col>
              <Button className="upvote-button" alt="upvote">
                <svg id="upvote-icon" viewBox="0 0 512 512">
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" fill="#66eb66" />
                </svg>
              </Button>
              <Button className="downvote-button" alt="downvote">
                <svg id="downvote-icon" viewBox="0 0 512 512">
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z" fill="#ef233c" />
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