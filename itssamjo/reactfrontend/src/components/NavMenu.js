import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {
    return(
        <div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/write-blog'>Write</Link>
            </div>
            <hr />
        </div>
    )
}