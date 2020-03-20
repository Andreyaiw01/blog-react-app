import React from 'react';
import ReactDOM from 'react-dom';
import PostsListContainer from '../containers/PostsListContainer'
import PostContainer from '../containers/PostContainer'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from '../components/Header';

export default () => {
    return (    
        <Router>
            <Header />
            <Route path="/" exact component={ PostsListContainer } />
            <Route path="/posts/:id" component={ PostContainer } /> 
        </Router>   
    )
}
