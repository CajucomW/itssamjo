import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBlog, deleteBlog } from '../actions/blogaction.js';

// TODO: Have a search function and post single entries

export class Blog extends Component {
    static PropTypes = {
        blog: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getBlog();
    }

    render() {
        console.log('=====Blog=====');
        return (
            <Fragment>
                <p>Blogs</p>
                <div>{this.props.blog.map((blog) => (
                    <div key={blog.pk}>
                        <p>{blog.title}</p>
                        <p>{blog.text}</p>
                        <p>{blog.created}</p>
                        <p>
                            <button
                                onClick={this.props.deleteBlog.bind
                                (this, blog.pk)}
                            >
                                {' '}
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