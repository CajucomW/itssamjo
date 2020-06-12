import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render () {
        return (
            <div>
                <h1>Page Not Found 404</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default NotFound;