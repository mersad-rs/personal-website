import React from "react";
import {Link} from "react-router-dom"
import "./nav.css"

const Nav = () => {
    return(
        <div className="bg-black position-sticky top-0 m-0">
            <ul className="p-3 d-flex list-unstyled">
                <li>
                    <Link to="/"><button className="navBtn">Home</button></Link>
                </li>
                <li>
                    <Link to="/About"><button className="navBtn">About Us</button></Link>
                </li>
                <li>
                    <Link to="/Contact"><button className="navBtn">Contact Us</button></Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav