import React from 'react';
import { Card } from 'react-bootstrap';
import './RoadmapCards.css';
// import Swal from 'sweetalert2';

// class Cards extends Component {

//     showDescription = () => {
//         console.log('');
//         Swal.fire({
//             type: 'info',
//             title: props.name,
//             text: props.description
//         })
//     }


// }


function Cards(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }} onClick={() => props.showDescription(props.description, props.url, props.image)}>
                <Card.Img src={props.image} alt="card" className="card-img" style={{ height: '180px' }} />
                {/* <Card.Body> */}

                {/* <Card.Title className="title">{props.name}</Card.Title> */}
                {/* <Card.Text className="back">{props.description}</Card.Text> */}
                {/* <Card.Link className="link">{props.link}</Card.Link> */}
                {/* </Card.Body> */}
                <Card.Footer>
                    {props.name}
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Cards;