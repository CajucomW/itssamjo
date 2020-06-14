import React, { Component, PropsTypes } from 'react';
import { withRouter } from 'react-router';
import axios from "axios";
import { API_URL } from "../../constants";

class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
    };

    onChangeUsername = (ev) => {
        this.setState({
            username: ev.target.value,
        });
    }
    onChangePassword = (ev) => {
        this.setState({
            password: ev.target.value,
        });
    }

    // componentDidMount() {
    //     this.resetState();
    // }

    fetchBlogs = () => {
        axios.get(API_URL)
        .then(response => this.setState({ blogs: response.data }));
    }

    resetState = () => {
        this.fetchBlogs();
    }

    //  TODO: Change this to affect Login interface instead
    //  createBlog = (ev) => {
    //     ev.preventDefault();
    //     axios.post(API_URL, this.state)
    //     .then(() => {
    //         this.setState();
    //         this.props.history.push('');
    //     });
    // }

    render() {
        return (
            <form>
                <p>username</p>
                <input 
                    type="text"
                    placeholder="Username."
                    onChange={this.onChangeUsername} />
                <br />
                <p>password</p>
                <input 
                    type="password"
                    placeholder="Password."
                    onChange={this.onChangePassword} />
                <br />
                <button>
                    Login
                </button>
            </form>
        );
    }
}

export default withRouter(LoginForm);