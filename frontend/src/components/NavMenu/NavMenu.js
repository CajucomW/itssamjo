import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

class NavMenu extends Component {
    render() {
        return (
            <div className='NavMenuStyle'>
                {/* TODO: turn these into links */}
                {/* TODO: align w/ main title */}
                <Link to="/">About</Link>
                <Link to="/blogs/">Blogs</Link>
                <p>instagram</p>
                <p>twitter</p>
                <p>facebook</p>
                <p>youtube</p>
            </div>
        )
    }
}

export default NavMenu;