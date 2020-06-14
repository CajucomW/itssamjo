import ReactDOM from 'react-dom';
import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import BlogsWrite from './components/BlogsWrite/BlogsWrite.js';
import LoginForm from './components/LoginForm/LoginForm.js';
import NotFound from './components/NotFound/NotFound.js';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<Switch>
						<Route exact path='/' component={Home} />
						{/* <PrivateRoute exact path='/write_blogs/' component={BlogsWrite} auth={this.props.auth} /> */}
						<Route exact path='/write_blogs/' component={BlogsWrite} />
						<Route exact path='/login/' component={LoginForm} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
    );
  }
}

export default App;
