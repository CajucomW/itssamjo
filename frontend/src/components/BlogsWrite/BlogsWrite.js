import React, { Component } from 'react';
import axios from "axios";
import { API_URL } from "../../constants";

class BlogsWrite extends Component {
    state = {
        title: '',
        text: '',
    };

    onChangeTitle = (ev) => {
        console.log("change title");
        this.setState({
            [ev.target.title]: ev.target.value
        });
    }

    onChangeText = (ev) => {
        console.log('change text');
        this.setState({
            [ev.target.text]: ev.target.value
        });
    }

    // onChangeTitle = (ev) => {
    //     this.setState({
    //         title: ev.target.value,
    //     });
    // }
    // onChangeText = (ev) => {
    //     this.setState({
    //         text: ev.target.value,
    //     });
    // }

    // submit = () => {
    //     if (this.state.text !== ''){
    //         const formData = {
    //             title: this.setState.title,
    //             text: this.setState.text,
    //         };

    //         fetch('http://localhost:8000/api/bloglist', {
    //             method: 'POST',
    //             // body: JSON.stringify(formData),
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("did data come back?", data);
    //             this.props.history.push('/');
    //         });
    //     }
    // }

    // submit = () => {
    //     const formData = {
    //         title: this.state.title,
    //         text: this.state.text,
    //     };

    //     fetch('http://localhost:8000/api/bloglist', {
    //         method: 'POST',
    //     }).then(response => response.json())
    //     .then(data => {});
    // }

    createBlog = (ev) => {
        ev.preventDefault();
        axios.post(API_URL, this.state)
        .then(() => {
            this.props.resetState();
        })
    }

    render() {
        console.log("is it rendering");
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
                <p>This where blogs are written</p>
                <button>
                    Post
                </button>
            </form>
        );
    }
}

export default BlogsWrite;