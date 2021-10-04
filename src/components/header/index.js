import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const Header = ({count}) => {
    return(
        <div className="navigation">
            <Link className="home_navigation" to="/home">Home</Link>
            <Link className="users_navigation" to="/users">Users</Link>
            <span className="users_count">
                Count: {count}
            </span>
        </div>
    );
};

const mapStateToProps = (state) => {
    return({
        count: state.users.count
    });
};

export default connect(mapStateToProps) (Header);