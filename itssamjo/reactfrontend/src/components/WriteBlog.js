import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

class WriteBlog extends React.Component {
    state = {
        title: '',
        text: '',
    };

    onChangeTitle = (ev) => {
        this.setState({
            title: ev.target.value,
        });
    };

    onChangeText = (ev) => {
        this.setState({
            text: ev.target.value,
        });
    };

    fetchBlogs = () => {
        console.log('===fetching from POST===');
        axios.get("http://localhost:8000/api/blog")
        .then(response => this.setState({ blogs: response.data }));
    };

    createBlog = (ev) => {
        ev.preventDefault();
        axios.post("http://localhost:8000/api/blog", this.state)
        .then(() => {
            console.log('===Create Blog?===');
            this.setState();
            this.props.history.push('');
        });
    };

    render() {
        console.log('===Write Blog===');
        return (
            <form onSubmit={this.createBlog}>
                <p>Title</p>
                <input
                    placeholder="Title"
                    onChange={this.onChangeTitle} />
                <br />
                <p>Text</p>
                <textarea
                    placeholder="Write Here!"
                    onChange={this.onChangeText} />
                <br />
                <button>
                    Post!
                </button>
            </form>
        );
    }
}

export default withRouter(WriteBlog);