import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header.js";

class App extends Component {
    render() {
        return(
            <Header />
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));