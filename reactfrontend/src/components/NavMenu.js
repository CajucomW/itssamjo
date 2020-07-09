import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/actionauth.js';

export class NavMenu extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        console.log('===NavMenu===');
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/write-blog'>Write</Link></li>
                <li><button onClick={this.props.logout}>Logout</button></li>
            </ul>
        );

        const guestLinks = (
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login' replace>Login</Link></li>
            </ul>            
        );

        return(
            <div>
                {isAuthenticated ? authLinks : guestLinks}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavMenu);