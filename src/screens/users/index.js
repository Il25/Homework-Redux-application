import React from "react";
import { connect } from "react-redux";
import { deleteData } from "../../redux/users/actions";
import "./index.css";

const Users = ({allUsers, count, deleteUser}) => {

    return(
        <div className="users_container">
            <div className="users_count">
                Count: {count}
            </div>
            <div>  
              {allUsers.map((user) => (
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
                        <div>
                            <button className="user_button">Edit</button>
                            <button className="user_button save">Save</button>
                            <button onClick={() => deleteUser(user.id)} className="user_button">Delete</button>
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

const mapDispatchToProps = (dispatch) => {
    return({
        deleteUser: (id) => dispatch(deleteData(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);