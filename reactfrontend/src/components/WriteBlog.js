import React , { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBlog } from '../actions/blogaction.js';

export class WriteBlog extends Component {
    state = {
        title: '',
        text: '',
    };

    static propTypes = {
        addBlog: PropTypes.func.isRequired,
    };

    onChange = (ev) => 
        this.setState(
            {
                [ev.target.name]: ev.target.value
            }
        );

    onSubmit = (ev) => {
        ev.preventDefault();
        const { title, text } = this.state;
        const blog = { title, text };
        this.props.addBlog(blog);
        this.setState({
            title: '',
            text: '',
        });
    }


    render() {
        console.log('===Write Blog===');
        const { title, text } = this.state;

        return (
            <div className='container'>
                <h1>Add Blog</h1>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label for='title'>Title</label>
                        <input
                            type="text"
                            onChange={this.onChange}
                            name="title"
                            value={title}
                            placeholder="Enter Title Here"
                            className='form-control'
                            id='title'
                            aria-describedby='title'
                            />
                    </div>
                    <br />
                    <div className='form-group'>
                        <label for='text'>Text</label>
                        <textarea
                            type="textarea"
                            onChange={this.onChange}
                            name="text"
                            value={text}
                            placeholder="Enter Text Here"
                            className='form-control'
                            id='text'
                            aria-describedby='text'
                            />
                    </div>
                    <button 
                        type="submit"
                        className='btn btn-success btn-rounded'>
                            Post!
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addBlog })(WriteBlog);