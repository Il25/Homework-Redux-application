import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteData, saveChangesData } from "../../redux/users/actions";
import "./index.css";

const Users = ({allUsers, deleteUser, saveChangesUser}) => {    
    const [isEditMode, setEditMode] = useState(true);
    const [changeUserInfo, setChangeUserInfo] = useState({});

    const chandeEditMode = (data) => {
        setEditMode(false);
        setChangeUserInfo({...data});
    };  
    
    const saveChangesAboutUser = () => {
        saveChangesUser(changeUserInfo)
        setEditMode(true);
    };

    return(
        <div className="users_container">  
            {isEditMode ? 
                <div> 
                    {allUsers.map((user, i) => (
                        <div key={i} className="user_container">
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
                                <button onClick={() => chandeEditMode(user)} className="user_button">Edit</button>
                                <button onClick={() => deleteUser(user.id)} className="user_button">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            : 
                <div className="changes_user_container">
                    <input defaultValue={changeUserInfo.name} onChange={(e) => {setChangeUserInfo(prevState => ({
                        ...prevState,
                        name: e.target.value,
                    }))}}></input>
                    <input defaultValue={changeUserInfo.lastName} onChange={(e) => {setChangeUserInfo(prevState => ({
                        ...prevState,
                        lastName: e.target.value,
                    }))}}></input>
                    <input defaultValue={changeUserInfo.age} onChange={(e) => {setChangeUserInfo(prevState => ({
                        ...prevState,
                        age: e.target.value,
                    }))}}></input>
                    <input defaultValue={changeUserInfo.gender} onChange={(e) => {setChangeUserInfo(prevState => ({
                        ...prevState,
                        gender: e.target.value,
                    }))}}></input>
                    <input defaultValue={changeUserInfo.email} onChange={(e) => {setChangeUserInfo(prevState => ({
                        ...prevState,
                        email: e.target.value,
                    }))}}></input>
                    <input defaultValue={changeUserInfo.userName} onChange={(e) => {setChangeUserInfo(prevState => ({
                        ...prevState,
                        userName: e.target.value,
                    }))}}></input>
                    <div>
                        <button className="user_button" onClick={() => saveChangesAboutUser(changeUserInfo)}>Save</button>
                        <button className="user_button" onClick={() => setEditMode(true)}>Cancel</button>
                    </div>
                </div>
            }        
        </div>
    );
};

const mapStateToProps = (state) => {
    return({
        allUsers: state.users.list,
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        deleteUser: (id) => dispatch(deleteData(id)),
        saveChangesUser: (data) => dispatch(saveChangesData(data)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);