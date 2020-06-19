// import React, { Fragment } from "react";
// import Home from "./Home.js";
// import Blog from "./Blog.js";

// export default function NavMenu() {
//     console.log('=====NavMenu=====');
//     return (
//         <Fragment>
//             <Home />
//             <Blog />
//         </Fragment>
//     );
// }

//=========================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    )
}