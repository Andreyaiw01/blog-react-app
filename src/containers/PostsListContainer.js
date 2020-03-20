import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { pushPosts } from '../actions'
import PostsList from '../components/PostsList';

class PostListContainer extends React.Component {

    componentDidMount() {
     this.getData();
    }

    componentDidUpdate() {
      this.getData();
    }

    getData(){
      fetch('https://simpleblogapi.herokuapp.com/posts')
      .then(response => response.json())
      .then(result => this.props.pushPosts(result) )
      .catch(error => console.log('error', error));  
    }

    render() {
      return (
        <>
          <PostsList posts={this.props.posts} />
        </>
      );    
    }
  }

 const mapStateToProps = state => {
    return {
      posts: state.PostReducer.posts
    }
  }
  
  const mapDispatchToProps = {
    pushPosts
  }
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostListContainer))
