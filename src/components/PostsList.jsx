import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import AddPostModal from './modals/AddPostModal';

function  PostsList(props)  {
  const [modalShow, setModalShow] = useState(false);
  const { posts } = props
  return (
    <>
    <AddPostModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
    <Container>
      <Row>
        <Col><h1>Blog</h1></Col>
      </Row>
      <Row>
        <Col>
          <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
            Add Post
          </Button>            
        </Col>
      </Row>
      <hr />          
      <Row>
        <Col>
          {
            posts.map((post, index) => {
              return (
                <Card key={index}>
                  <Card.Header as="h5"><Link to={ 'posts/' + post.id }>{post.title}</Link></Card.Header>
                  <Card.Body>
                    <Card.Text>
                      {post.body.slice(0, post.body.length / 2) + '...'}
                    </Card.Text>
                  </Card.Body>
                </Card>              
              )
            })
          }    
        </Col>
      </Row>
    </Container>
    </>
  );     
}

export default PostsList;
