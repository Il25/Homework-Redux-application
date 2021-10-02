import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
    return(
        <div className="navigation">
            <Link className="home_navigation" to="/home">Home</Link>
            <Link className="users_navigation" to="/users">Users</Link>
        </div>
    )
};

export default Header;