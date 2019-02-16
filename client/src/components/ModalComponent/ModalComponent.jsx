import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class ModalComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Button className="Add-resource" variant="secondary" size="lg" block onClick={this.handleShow}>
                    Add Resource
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please fill the resource's info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control type="title" placeholder="Title" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="url" placeholder="URL" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control type="description" as="textarea" rows="3" placeholder="Description" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="logout-button" variant="secondary" size="lg" onClick={this.handleClose} block>
                            Cancel
                        </Button>
                        <Button className="Add-resource" id="add-modal" variant="secondary" size="lg" onClick={this.handleClose} block>
                            Save Resource
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalComponent;