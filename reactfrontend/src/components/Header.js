import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
    }
    render() {
        console.log('===Header===');
        const user = this.props.auth;
        return(
            <div>
                {/* insert bootstrap style here */}
                <div>
                    <h1>itssamjo</h1>
                </div>
            </div>
        );
    }
}

export default Header;