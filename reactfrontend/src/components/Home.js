import React, { Component } from 'react';
import Blog from './Blog.js';

export class Home extends Component {
    
    render() {
        console.log("=====Home=====");
        return (
            <div>
                <h1>Homepage</h1>
                <p>
                    She doesn't know I'm writing
                    this for her yet.
                </p>
            </div>
        );
    }
}

export default Home;