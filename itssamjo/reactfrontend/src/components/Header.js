import React, { Component, Fragment } from "react";
import NavMenu from './NavMenu.js';

export class Header extends Component {
    render() {
        console.log('=====Header=====');
        return(
            <Fragment>
                {/* insert bootstrap style here */}
                <nav>
                    <h1>itssamjo</h1>
                    <NavMenu />
                </nav>
            </Fragment>
        );
    }
}

export default Header;