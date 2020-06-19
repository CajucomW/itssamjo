import React, { Component } from 'react';

// TODO: Have a search function and post single entries

export class Blog extends Component {
    render() {
        console.log('=====Blog=====');
        const blogs = this.props.blogs;
        return (
            blogs.map(blog => (
                <div>
                    <p>{blog.title}</p>
                    <p>{blog.text}</p>
                    <p>{blog.created}</p>
                </div>
            ))
        );
    }
}

export default Blog;