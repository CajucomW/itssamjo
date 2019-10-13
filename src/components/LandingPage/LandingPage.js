import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './LandingPage.css';
class LandingPage extends Component {
    render() {
        return (
            <div className='LandingPageStyle'>
                {/* TODO: turn these into links */}
                {/* TODO: align w/ main title */}
                <p>This will be your about section</p>
            </div>
        );
    }
}

export default LandingPage;