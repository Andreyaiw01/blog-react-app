import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';

export default class EditPostModal extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            postTitle: '',
            postDescription: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.editData = this.editData.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
 
    editData(e) {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({"title":this.state.postTitle,"body":this.state.postDescription});
        
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(`https://simpleblogapi.herokuapp.com/posts/${this.props.id}`, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
        
        this.props.onHide();
        this.setState({
            postTitle: '',
            postDescription: ''
        })
    }
   
    render() {
        return (
            <Modal 
                {...this.props} 
                aria-labelledby="edit-post-modal"
                centered
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="edit-post-modal">
                        Edit Post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="show-grid">
                            <Col>
                                <Form onSubmit={this.editData}>
                                    <Form.Group controlId="form-post-title">
                                        <Form.Label>Post Title</Form.Label>
                                        <Form.Control 
                                            name='postTitle' 
                                            type="text" 
                                            placeholder="Enter Title"
                                            onChange={this.handleInputChange}
                                            value={this.state.postTitle} 
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="form-post-description">
                                        <Form.Label>Post Description</Form.Label>
                                        <Form.Control 
                                            name='postDescription' 
                                            as="textarea" 
                                            rows="5" 
                                            onChange={this.handleInputChange}
                                            value={this.state.postDescription}
                                            required                             
                                        />
                                    </Form.Group>
                                    <Button variant="success" type="submit">
                                        Save
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
  }