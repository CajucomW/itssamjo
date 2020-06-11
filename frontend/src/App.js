import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import BlogsWrite from './components/BlogsWrite/BlogsWrite.js';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/write_blogs/' component={BlogsWrite} />
					</Switch>
				</div>
			</div>
    );
  }
}

export default App;
