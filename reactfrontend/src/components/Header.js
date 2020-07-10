import React, { Component } from "react";

export class Header extends Component {
    render() {
        console.log('===Header===');
        const user = this.props.auth;
        console.log("user?", user);
        return(
            <div>
                {/* insert bootstrap style here */}
                <div>
                    <h1>itssamjo</h1>
                </div>
            </div>
        );
    }
}
export default Header;