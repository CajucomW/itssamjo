import React, { Component } from "react";

class BlogList extends Component {
    render () {
        const blogs = this.props.blogs;
        return (
            blogs.map(blog => (
            <div>
                {blog.title}
                <br />
                {blog.text}
            </div>
            ))
        );
    }
}
export default BlogList;