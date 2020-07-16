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
            <div className="navbar-nav">
                <Link className="nav-item nav-link active" to='/'>Home<span className="sr-only">(current)</span></Link>
                <Link className="nav-item nav-link" to='/blog'>Blog</Link>
                <Link className="nav-item nav-link" to='/write-blog'>Write</Link>
                <button onClick={this.props.logout} className='btn btn-link'>Logout</button>
            </div>
            // <ul>
            //     <li><Link to='/'>Home</Link></li>
            //     <li><Link to='/blog'>Blog</Link></li>
            //     <li><Link to='/write-blog'>Write</Link></li>
            //     <li><button onClick={this.props.logout}>Logout</button></li>
            // </ul>
        );

        const guestLinks = (
            <div className="navbar-nav">
                <Link className="nav-item nav-link active" to='/'>Home<span className="sr-only">(current)</span></Link>
                <Link className="nav-item nav-link" to='/blog'>Blog</Link>
                <Link className="nav-item nav-link" to='/login'>Login</Link>
            </div>
            
            // <ul>
            //     <li><Link to='/'>Home</Link></li>
            //     <li><Link to='/blog'>Blog</Link></li>
            //     <li><Link to='/register'>Register</Link></li>
            //     <li><Link to='/login' replace>Login</Link></li>
            // </ul>            
        );

        return(
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                {isAuthenticated ? authLinks : guestLinks}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavMenu);