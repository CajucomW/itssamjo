import React, { Component } from "react";

class BlogList extends Component {
    render () {
        const blogs = this.props.blogs;
        return (
            blogs.map(blog => (
            <div>
                <h3><strong>{blog.title}</strong></h3>
                <br />
                <hr />
                {blog.text}
                <br />
                <br />
                <small>{blog.created}</small>
                <br />
                <hr />
            </div>
            ))
        );
    }
}
export default BlogList;