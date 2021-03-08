import React from "react";
import { Link } from "gatsby";
import "./Menu.css";

function Menu(){
    return(
        <div className="MenuContainer">
            <div className="MenuHead">
                <Link to="/">
                    <h1>Abdullah Sahin</h1>
                </Link>
            </div>
            <div className="MenuItems">
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
                <Link to="/work">Work</Link>
                <Link to="/now">Now</Link>
                <Link to="/past">Past</Link>
            </div>
        </div> 
    );
}

export default Menu;