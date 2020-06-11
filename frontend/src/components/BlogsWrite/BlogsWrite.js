import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

class BlogsWrite extends Component {
    state = {
        title: '',
        text: '',
    };

    onChangeContent = (ev) => {
        this.setState({
            title: ev.target.value,
            text: ev.target.value,
        });
    }

    submit = () => {
        if (this.state.text !== ''){
            const formData = {
                title: this.setState.title,
                text: this.setState.text,
            };

            fetch('http://localhost:8000/api/bloglist', {
                method: 'POST',
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                console.log("did data come back?", data);
                this.props.history.push('/');
            });
        }
    }
    render() {
        return (
            <div>
                <input type='text' />
                <textarea placeholder="Write blog here." />
                <p>This where blogs are written</p>
                <button onClick={this.submit}>
                    Post
                </button>
            </div>
        );
    }
}

export default BlogsWrite;