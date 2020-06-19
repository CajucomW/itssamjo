import React, { Component } from 'react';
import Blog from './Blog.js';
import axios from 'axios';

export const API_URL = "http://localhost:8000/api/bloglist";

export class Home extends Component {
    state = {
        blogs: []
    };

    componentDidMount() {
        this.resetState();
    }

    fetchBlogs = () => {
        console.log('===fetching blogs===');
        axios.get("http://localhost:8000/api/bloglist")
        .then(response => this.setState({ blogs: response.data }));
    };

    resetState() {
        this.fetchBlogs();
    };

    render() {
        console.log("=====Home=====");
        return (
            <Blog
                blogs={this.state.blogs}
                resetState={this.resetState}
                />
        );
    }
}

export default Home;