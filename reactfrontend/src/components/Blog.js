import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBlog, deleteBlog } from '../actions/blogaction.js';


export class Blog extends Component {
    static propTypes = {
        blog: PropTypes.array.isRequired,
        auth: PropTypes.object.isRequired,
        getBlog: PropTypes.func.isRequired,
        deleteBlog: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getBlog();
    }

    render() {
        console.log('===Blog===');
        const { isAuthenticated } = this.props.auth;
        
        const authBlogView = (
            <Fragment>
                <div className='container'>
                    <h1>Blogs</h1>
                    <div>{this.props.blog.map((blog) => (
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
                                    Delete
                                </button>
                            </p>
                            <hr />
                        </div>
                    ))}
                    </div>
                </div>
            </Fragment>
        );

        const guestBlogView = (
            <Fragment>
                <div className='container'>
                    <h1>Blogs</h1>
                    <div>{this.props.blog.map((blog) => (
                        <div key={blog.id}>
                            <p>{blog.title}</p>
                            <p>{blog.text}</p>
                            <p>{blog.created}</p>
                            <p>{blog.id}</p>
                            <hr />
                        </div>
                    ))}
                    </div>
                </div>
            </Fragment>
        );

        return (
            <div>
                {isAuthenticated ? authBlogView : guestBlogView}
            </div>
        );

    }
}

const mapStateToProps = state => ({
    blog: state.blog.blog,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { getBlog, deleteBlog }
)(Blog);