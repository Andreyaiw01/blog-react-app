import React, { Component } from 'react';
import { Row, Col, Button, Form, Card } from 'react-bootstrap';

class Comments extends React.Component {
    constructor(props){
        super();
        this.state = {
            commitValue: ''
        }
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.addCommit = this.addCommit.bind(this);  
    }

    handleChangeValue(e) {
        this.setState({
            commitValue: e.target.value
        })
    }

    addCommit(e) {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({"postId":this.props.data.id,"body": this.state.commitValue});
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        fetch("https://simpleblogapi.herokuapp.com/comments", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
        this.setState({
            commitValue: ''
        });        
    }

    render() {
        const { data } = this.props;
        return (
            <>
                <Row className='comments'>
                    <Col><h5>Comments</h5></Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <Form onSubmit={ this.addCommit }>
                            <Form.Group controlId="commentBody">
                                <Form.Label>Enter your commit</Form.Label>
                                <Form.Control as="textarea" rows="3" value={this.state.commitValue} onChange={this.handleChangeValue} required />
                            </Form.Group>
                            <Button variant="success" type="submit">Add Comment</Button>
                        </Form>                        
                    </Col>
                </Row>                      
                <Row>
                    <Col>
                        {
                            data.comments && data.comments.length ?
                            data.comments.map((comment,index) => {
                                return (
                                    <Card key={index}>
                                        <Card.Body>{comment.body}</Card.Body>
                                    </Card>                                        
                                )
                            }) :
                            <div className='no-comments'>No comments</div>
                        }
                    </Col>
                </Row>
            </>
        );    
    }
  }

  export default Comments
