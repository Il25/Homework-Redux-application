import React from "react";
import { connect } from "react-redux";
import "./index.css";

const Users = ({allUsers,  count}) => {
    return(
        <div className="users_container">
            <div className="users_count">
                Count: {count}
            </div>
            <div >  
              {allUsers.map(user => (
                    <div className="user_container">
                        <div className="user_div">
                            Name: {user.name}
                        </div>
                        <div className="user_div">
                            Last name: {user.lastName}
                        </div>
                        <div className="user_div">
                            Age: {user.age}
                        </div>
                        <div className="user_div">
                           Gender: {user.gender}
                        </div>
                        <div className="user_div">
                            Email: {user.email}
                        </div>
                        <div className="user_div">
                            User name: {user.userName}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return({
        allUsers: state.users.list,
        count: state.users.count
    });
};

export default connect(mapStateToProps)(Users);