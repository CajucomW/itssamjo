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

    onSubmit = (e) => {
        this.props.login(
            this.state.username,
            this.state.password
            );
        e.preventDefault();
        console.log('===submit===')
    };

    onChange = (e) =>
        this.setState({ 
            [e.target.name]: e.target.value
            });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />,
            console.log('===Login===')
        }
        const { 
            username, 
            password
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
                                autoComplete='off'
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

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps,  { login })(Login);