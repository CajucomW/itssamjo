import React , { Component } from 'react';
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
            <div>
                <p>Add Blog</p>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            onChange={this.onChange}
                            name="title"
                            value={title}
                            />
                    </div>
                    <div>
                        <label>Text</label>
                        <input
                            type="textarea"
                            onChange={this.onChange}
                            name="text"
                            value={text}
                            />
                    </div>
                    <div>
                        <button type="submit">Post!</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addBlog })(WriteBlog);