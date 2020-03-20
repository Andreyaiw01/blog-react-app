import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import EditPostModal from './modals/EditPostModal';

function Post(props) {  
    const [modalShow, setModalShow] = useState(false);
    const { data } = props;
    return (
        <>
            <EditPostModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={data.id}
                title={data.title}
                description={data.body}
            />
            <Row>
                <Col><h1>{data.title}</h1></Col>
            </Row>
            <Row>
                <Col>
                <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
                    Edit Post
                </Button>                       
                </Col>
            </Row>            
            <hr/>
            <Row>
                <Col>
                    {data.body}
                </Col>
            </Row>                      
        </>
    );       
}

export default Post;
