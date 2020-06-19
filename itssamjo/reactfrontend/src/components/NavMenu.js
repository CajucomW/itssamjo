import React, { Fragment } from "react";
import Home from "./Home.js";
import Blog from "./Blog.js";

export default function NavMenu() {
    console.log('=====NavMenu=====');
    return (
        <Fragment>
            <Home />
            <Blog />
        </Fragment>
    );
}