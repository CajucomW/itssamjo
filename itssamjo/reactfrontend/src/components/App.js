import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
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

// React Alerts
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    render() {
        console.log('=====App=====');
        return (
            <Provider store={store}>
                <AlertProvider>
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
                </AlertProvider>
            </Provider>
        );
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));