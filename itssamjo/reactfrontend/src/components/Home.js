import React, { Component } from 'react';
import Blog from './Blog.js';
import { getBlog } from '../actions/blogaction.js';
import axios from 'axios';

export class Home extends Component {
    // state = {
    //     blogs: []
    // };

    // componentDidMount() {
    //     this.resetState();
    // }

    // // fetchBlogs = () => {
    // //     console.log('===fetching blogs===');
    // //     axios.get("http://localhost:8000/api/blog")
    // //     .then(response => this.setState({ blogs: response.data }));
    // // };

    // fetchBlogs() {
    //     this.props.getBlog();
    // }

    // resetState() {
    //     this.props.fetchBlogs();
    // };

    render() {
        console.log("=====Home=====");
        return (
            <Blog
                // blogs={this.state.blogs}
                // resetState={this.resetState}
                />
        );
    }
}

export default Home;