import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import BlogsWrite from '../BlogsWrite/BlogsWrite.js';

class NavMenu extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/write_blogs/">Blogs</Link>
            </div>
        )
    }
}

export default NavMenu;