import React, { Component } from "react";
// import { Col, Container, Row } from "reactstrap";
import BlogList from "../BlogList/BlogList.js";
import axios from "axios";
import { API_URL } from "../../constants";

class Home extends Component {
    state = {
        blogs: []
    };

    componentDidMount() {
        this.resetState();
    }

    // getBlogs = () => {
    //     console.log("Fetching blogs");
    //     axios.get(API_URL).then(res => this.setState({
    //         blogs: res.data
    //     }));
    // }

    getBlogs() {
        console.log('Fetching data from API');
        fetch('http://localhost:8000/api/bloglist')
        .then(response => response.json())
        .then(data => {
            console.log('Got data back', data);
            this.setState({
            blogs: data,
            });
        });
    }

    resetState() {
        this.getBlogs();
    };

    render () {
        return (
            <BlogList
                blogs={this.state.blogs}
                resetState={this.resetState}
                />
        );
    }
}

export default Home;