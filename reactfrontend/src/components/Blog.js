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
                <h1>Blogs</h1>
                <div>{this.props.blog.map((blog) => (
                    // <div >
                    <div key={blog.id}>
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
                        <hr />
                    </div>
                ))}
            </div>
            </Fragment>
        );

    }
}

const mapStateToProps = state => ({
    blog: state.blog.blog
});

export default connect(
    mapStateToProps,
    { getBlog, deleteBlog }
)(Blog);