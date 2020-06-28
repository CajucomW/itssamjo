import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Header from "./Header.js";
import Home from './Home.js';
import Blog from "./Blog.js";
import WriteBlog from './WriteBlog.js';
import Alerts from './Alerts.js';
import Login from './Login.js';
import Register from './Register.js';
import PrivateRoute from './PrivateRoute.js';

import { Provider } from 'react-redux';
import store from '../store';

// React Alerts
const alertOptions = {
    timeout: 5000,
    position: 'top center'
}

class App extends Component {
    render() {
        console.log('===App===');
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                <Router>
                    <Header />
                    <Alerts />
                    <div>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/blog' component={Blog} />
                            <PrivateRoute exact path='/write-blog' component={WriteBlog} />
                            <Route exact path='/register' component={Register} />
                            <Route exact path='/login' component={Login} />
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