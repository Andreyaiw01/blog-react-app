import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { pushPost } from '../actions'
import Post from '../components/Post';
import Comments from '../components/Comments';
import { Container, Row } from 'react-bootstrap';

class PostContainer extends React.Component {
    constructor(props){
        super();
        this.state = {
            isLoaded: false
        }
        this.getData = this.getData.bind(this);
    }
    
    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.getData();
        }   
    }

    getData() {
        fetch(`https://simpleblogapi.herokuapp.com/posts/${this.props.match.params.id}?_embed=comments`)
        .then(response => response.json())
        .then(result => {
                return (
                    this.props.pushPost(result),
                    this.setState({
                        isLoaded: true
                    })                      
                )
            })
        .catch(error => console.log('error', error));    
    }

    render() {
        return (
            <>
                <Container>
                    {
                        this.state.isLoaded ?
                        <>
                        <Post data={this.props.post} />
                        <Comments data={this.props.post} />
                        </> :
                        <Row>Loading...</Row>
                    } 
                </Container>
            </>
        );    
    }
}

const mapStateToProps = state => {
    return {
        post: state.PostReducer.post
    }
}
  
const mapDispatchToProps = {
    pushPost
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostContainer))
