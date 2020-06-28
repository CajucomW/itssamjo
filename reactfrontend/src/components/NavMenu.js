import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {
    console.log('===NavMenu===');
    return(
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/write-blog'>Write</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <hr />
        </ul>
    )
}