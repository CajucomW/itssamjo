import React, { Component, PropsTypes } from 'react';
import { withRouter } from 'react-router';
import axios from "axios";
import { API_URL } from "../../constants";

class BlogsWrite extends React.Component {
    state = {
        title: '',
        text: '',
    };

    onChangeTitle = (ev) => {
        this.setState({
            title: ev.target.value,
        });
    }
    onChangeText = (ev) => {
        this.setState({
            text: ev.target.value,
        });
    }

    // componentDidMount() {
    //     this.resetState();
    // }

    fetchBlogs = () => {
        axios.get(API_URL)
        .then(response => this.setState({ blogs: response.data }));
    }

    resetState() {
        this.fetchBlogs();
    }

    createBlog = (ev) => {
        ev.preventDefault();
        axios.post(API_URL, this.state)
        .then(() => {
            this.setState();
            this.props.history.push('');
        });
    }

    render() {
        return (
            <form onSubmit={this.createBlog}>
                <h2>Title</h2>
                <input 
                    placeholder="Title goes here."
                    onChange={this.onChangeTitle} />
                <br />
                <h2>Blog</h2>
                <textarea 
                    placeholder="Write blog here."
                    onChange={this.onChangeText} />
                <br />
                <button>
                    Post
                </button>
            </form>
        );
    }
}

export default withRouter(BlogsWrite);