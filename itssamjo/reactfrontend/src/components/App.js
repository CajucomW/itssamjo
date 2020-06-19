import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from "./Header.js";
import NavMenu from "./NavMenu.js";

class App extends Component {
    render() {
        console.log('=====App=====');
        return (
            <Fragment>
                <Header />
                <hr />
                <div>
                    <NavMenu />
                </div>
            </Fragment>
        );
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));