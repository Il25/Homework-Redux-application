import React, { useState } from "react";
import { connect } from "react-redux";
import { setData } from "../../redux/users/actions";
import "./index.css";

const Home = ({setUser}) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [id, setId] = useState(Number)

  const handleName = (event) => {
    setName(event.target.value)
  };

  const handleLastname = (event) => {
    setLastname(event.target.value)
  };

  const handleAge = (event) => {
    setAge(event.target.value)
  };

  const handleGender = (event) => {
    setGender(event.target.value)
  };

  const handleEmail = (event) => {
    setEmail(event.target.value)
  };

  const handleUserName = (event) => {
    setUserName(event.target.value)
  };

  const createUser = () => {
    setId(id + 1)
    setUser({
      id,
      name, 
      lastname,
      age,
      gender,
      email,
      userName
    })
    alert("User is added!")
  };

  return (
    <div className="home_container">
      <div className="main_inputs_container">
        <input placeholder="Name" onChange={handleName} />
        <input placeholder="Last name" onChange={handleLastname}/>
        <input placeholder="Age" onChange={handleAge}/>
        <div className="gender" onChange={handleGender}>
          <select>
            <option>
              Gender*
            </option>
            <option>
              Male
            </option>
            <option>
              Female
            </option>
          </select>
        </div>
        <input placeholder="Email" onChange={handleEmail}/>
        <input placeholder="User Name" onChange={handleUserName}/>
      </div>
      <div className="main_buttons_container">
        <button onClick={createUser}>Add user</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setData(user)),
});

export default connect(null, mapDispatchToProps)(Home);