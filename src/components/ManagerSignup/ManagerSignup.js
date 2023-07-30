import React, { useState, useEffect, useContext } from "react";
import {
  TextField,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import axios from "axios";

import "./style.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

function ManagerSignup() {
  const { user, setUser } = useContext(UserContext);
  const [AddUser, setAddUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    await axios
      .post("http://localhost:8000/manager", AddUser)
      .then((response) => {
        console.log(response.status);

        setUser({
          id: response.data["_id"],
          name: response.data["name"],
          email: response.data["email"],
          mobile: response.data["mobile"],
        });
      });
  };

  function handleNameChange(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        name: value,
      };
    });
  }

  function handleMobileChange(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        mobile: value,
      };
    });
  }
  function handleEmailChange(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        email: value,
      };
    });
  }

  function handlePasswordChange(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        password: value,
      };
    });
  }
  return (
    <div className="ManagerLogin">
      <Card className="card">
        <CardContent>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={AddUser.name}
            onChange={handleNameChange}
          />
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            value={AddUser.mobile}
            label="Contact No."
            variant="standard"
            onChange={handleMobileChange}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={AddUser.email}
            onChange={handleEmailChange}
          />
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            value={AddUser.password}
            label="Password"
            variant="standard"
            type="password"
            onChange={handlePasswordChange}
          />
        </CardContent>

        <CardActions>
          <button class="btn btn-primary" onClick={handleSubmit}>
            SignUp
          </button>
        </CardActions>
        <br />
        <CardActions>
          <h3> Have an account?</h3>
          <Link class="btn btn-primary" to={`/`}>
            Login
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default ManagerSignup;
