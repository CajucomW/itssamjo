import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/actionauth.js';

export class Login extends Component {
    state = {
        username: '',
        password: '',
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        this.props.login(
            this.state.username,
            this.state.password
            );
        console.log('===submit===')
    };

    onChange = (ev) =>
        this.setState({ 
            [ev.target.name]: ev.target.value
            });

    render() {
        console.log('===LoginPage===');
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />;
        }
        const { 
            username, 
            password
            } = this.state;
            
        return (
            <div>
                <div className='container'>
                    <h2>
                        Login
                    </h2>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label for='username'>
                                Username
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='username'
                                aria-describedby='username'
                                name='username'
                                onChange={this.onChange}
                                value={username} 
                            />
                        </div>
                        <div className='form-group'>
                            <label for='password'>
                                Password
                            </label>
                            <input
                                type='password'
                                className='form-control'
                                id='password'
                                aria-describedby='password'
                                name='password'
                                autoComplete='off'
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <button 
                            type='submit'
                            className='btn btn-light-green btn-rounded'>
                            Login
                        </button>
                        <small
                            id='register'
                            className='form-text text-muted'>
                            Don't have an account?
                            <Link 
                                to='/register'
                                className='nav-link'>
                                Register
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

export default connect(mapStateToProps,  { login })(Login);