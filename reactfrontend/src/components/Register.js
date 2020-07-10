import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createMessage } from '../actions/actionmesasge.js';
import { register } from '../actions/actionauth.js';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        console.log('===Submit===');
        const { 
            username, 
            email, 
            password, 
            password2 
        } = this.state;
        if(password != password2) {
            this.props.createMessage({
                passwordNotMatch: 'Passwords Do Not Match'
            });
        } else {
            const newUser = {
                username,
                password,
                email                
            }
            this.props.register(newUser);
        };
    }

    onChange = (ev) =>
        this.setState({ 
            [ev.target.name]: ev.target.value
            });

    render() {
        console.log('===Register===');
        const { 
            username, 
            email, 
            password, 
            password2 
            } = this.state;
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />;
        };
            
        return (
            <div>
                <div>
                    <h2>
                        Register
                    </h2>
                    <form onSubmit={this.onSubmit}>
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
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                onChange={this.onChange}
                                value={email}
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
                            <label>
                                Confirm Password
                            </label>
                            <input
                                type='password'
                                name='password2'
                                onChange={this.onChange}
                                value={password2}
                            />
                        </div>
                        <div>
                            <button type='submit'>
                                Register
                            </button>
                        </div>
                        <p>
                            Already have an account?
                            <Link to='/login'>
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
    mapStateToProps, { 
        register, 
        createMessage 
        })
        (Register);