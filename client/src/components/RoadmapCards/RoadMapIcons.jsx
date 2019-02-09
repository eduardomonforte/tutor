import React from 'react';
import { ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap';
import './RoadmapCards.css';

function Icons(props) {

    return (
        <div>
            <ButtonToolbar aria-label="Toolbar with button groups">

                <ButtonGroup aria-label="Third group">
                    <Button className="outside-of-button"><img className="button-for-icon" src={props.image} alt="whatever" height="100px" width="100px" /></Button>
                </ButtonGroup>

            </ButtonToolbar>
        </div>
    )
}

export default Icons;