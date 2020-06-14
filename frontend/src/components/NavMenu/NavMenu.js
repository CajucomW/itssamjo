import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavMenu extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/write_blogs/">Blogs</Link>
                <Link to="/login/">Login</Link>
            </div>
        )
    }
}

export default NavMenu;