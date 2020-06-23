import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBlog, deleteBlog, addBlog } from '../actions/blogaction.js';


export class Blog extends Component {
    static propTypes = {
        blog: PropTypes.array.isRequired,
        getBlog: PropTypes.func.isRequired,
        deleteBlog: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getBlog();
    }

    render() {
        console.log('=====Blog=====');
        return (
            <Fragment>
                <p>Blogs</p>
                <div>{this.props.blog.map((blog) => (
                    // <div key={blog.id}>
                    <div>
                        <p>{blog.title}</p>
                        <p>{blog.text}</p>
                        <p>{blog.created}</p>
                        <p>{blog.id}</p>
                        <p>
                            <button
                                onClick={this.props.deleteBlog.bind
                                (this, blog.id)}
                            >
                                {" "}
                                Delete
                            </button>
                        </p>
                    </div>
                ))}
            </div>
            </Fragment>
        );
        //=========Pre REDUX Code=========
        // const blogs = this.props.blogs;
        // return (
        //     blogs.map(blog => (
        //         <div>
        //             <p>{blog.title}</p>
        //             <p>{blog.text}</p>
        //             <p>{blog.created}</p>
        //         </div>
        //     ))
        // );
    }
}

const mapStateToProps = state => ({
    blog: state.blog.blog
});

export default connect(
    mapStateToProps,
    { getBlog, deleteBlog }
)(Blog);