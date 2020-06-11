import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import './App.css';

// import NavMenu from './components/NavMenu/NavMenu.js';
// import LandingPage from './components/LandingPage/LandingPage.js';
// import Blogs from './components/Blogs/Blogs.js';
import Header from './components/Header/Header.js';

class App extends Component {
  render() {
    return (
      <Header />
      // <div className="App">

      //   <div className="App-NavMenu">
      //     <NavMenu />
      //   </div>

      //   <div className="App-title">
      //     <h1>itssamjo</h1>
      //   </div>

      //   <div className="App-mainContent">
      //     <Switch>
      //       <Route exact path='/' component={LandingPage} />
      //       <Route exact path='/blogs/' component={Blogs} />
      //     </Switch>
      //   </div>

      // </div>
    );
  }
}

export default App;
