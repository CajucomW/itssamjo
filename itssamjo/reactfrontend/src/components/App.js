import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from "./Header.js";
import Home from './Home.js';
import Blog from "./Blog.js";

class App extends Component {
    render() {
        console.log('=====App=====');
        return (
            <Router>
                <Header />
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/blog' component={Blog} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));