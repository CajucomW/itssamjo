import React, { Component } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import BlogsWrite from '../BlogsWrite/BlogsWrite.js';
import NavMenu from '../NavMenu/NavMenu.js';

class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                    <h1 class="navbar-brand">itssamjo</h1>

                    <NavMenu />
                </nav>

                <h1>Spammy's Blog Page</h1>
                <p>She doesn't know I'm working on this...</p>
                <br />
            </div>
        );
    }
}

export default Header;