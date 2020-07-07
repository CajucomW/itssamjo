import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createMessage } from '../actions/actionmesasge.js';

export class Register extends Component {
    state = {
        username: '',
        email: '',
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
        console.log('===Register===');
        const { 
            username, 
            email, 
            password, 
            password2 
            } = this.state;
            
        return (
            <div>
                <div>
                    <h2>
                        Register
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


export default Register;
// const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(
//     mapStatetoProps, { 
//         register, 
//         createMessage 
//         })
//         (Register);