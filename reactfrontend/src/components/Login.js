import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createMessage } from '../actions/actionmesasge.js';

export class Login extends Component {
    state = {
        username: '',
        password: '',
        password2: ''
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        console.log('submit')
    }

    onChange = (ev) =>
        this.setState({ 
            [ev.target.name]: ev.target.value
            });

    render() {
        console.log('===Login===');
        const { 
            username, 
            password, 
            password2 
            } = this.state;
            
        return (
            <div>
                <div>
                    <h2>
                        Login
                    </h2>
                    <form onSubmit={this.Submit}>
                        <div>
                            <label>
                                Username
                            </label>
                            <input
                                type='text'
                                name='username'
                                onChange={this.onChange}
                                value={username} 
                            />
                        </div>
                        <div>
                            <label>
                                Password
                            </label>
                            <input
                                type='password'
                                name='password'
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <div>
                            <button type='submit'>
                                Login
                            </button>
                        </div>
                        <p>
                            Don't have an account?
                            <Link to='/register'>
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;