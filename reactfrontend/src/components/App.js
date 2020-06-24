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
import WriteBlog from './WriteBlog.js';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        console.log('=====App=====');
        return (
            <Provider store={store}>
                <Router>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/blog' component={Blog} />
                            <Route exact path='/write-blog' component={WriteBlog} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));