import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavMenu from './NavMenu.js';

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
    }
    render() {
        console.log('===Header===');
        const user = this.props.auth;
        return(
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                {/* insert bootstrap style here */}
                <h1 className="navbar-brand" href="#">itssamjo</h1>
                {/* <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button> */}
                <NavMenu />
            </nav>
        );
    }
}

export default Header;