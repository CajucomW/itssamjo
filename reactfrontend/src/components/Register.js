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
                <div className='container'>
                    <h2>
                        Register
                    </h2>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label for='username'>
                                Username
                            </label>
                            <input
                                type='text'
                                name='register-username'
                                onChange={this.onChange}
                                value={username} 
                                className='form-control'
                                id='register-user'
                                aria-describedby='register-user'
                            />
                        </div>
                        <div className='form-group'>
                            <label for='email'>
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                onChange={this.onChange}
                                value={email}
                                className='form-control'
                                id='email'
                                aria-describedby='email'
                            />
                        </div>
                        <div className='form-group'>
                            <label for='register-password'>
                                Password
                            </label>
                            <input
                                type='password'
                                name='password'
                                autoComplete='off'
                                onChange={this.onChange}
                                value={password}
                                className='form-control'
                                id='register-password'
                                aria-describedby='register-password'
                            />
                        </div>
                        <div className='form-group'>
                            <label for='confirm'>
                                Confirm Password
                            </label>
                            <input
                                type='password'
                                name='password2'
                                autoComplete='off'
                                onChange={this.onChange}
                                value={password2}
                                className='form-control'
                                id='confirm'
                                aria-describedby='confirm'
                            />
                        </div>
                        <button 
                            type='submit'
                            className='btn btn-primary'>
                            Register
                        </button>
                        <small
                            id='login'
                            className='form-text text-muted'>
                            Already have an account?
                            <Link 
                                to='/login'
                                className='nav-link'>
                                Login
                            </Link>
                        </small>
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