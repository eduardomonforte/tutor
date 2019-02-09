import React from 'react';
import './icons';

const RoadmapCards = props => (
    <div 
        className="card" 
        value={props.id} 
        onClick={() => props.handleClick(props.id)}>
        <div className="img-container">
            <img alt={props.name} title={props.name} src={props.image} />
        </div>
        <div classname="description">
        </div>
    </div>
);

export default RoadmapCards;
