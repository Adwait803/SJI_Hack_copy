import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { Card } from "react-bootstrap";

import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../UserContext";

function ManagerLogin() {
  const navigate = useNavigate;
  const [Loginuser, setLoginUser] = useState({ email: "", password: "" });
  const { user, setUser } = useContext(UserContext);

  // function handleClick(event) {
  //   console.log(user);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);

    await axios
      .post("http://localhost:8000/manager/login", Loginuser)
      .then((response) => {
        console.log(response.data);
        // console.log(response.data.token);
        setUser({
          id: response.data["_id"],
          name: response.data["name"],
          email: response.data["email"],
          mobile: response.data["mobile"],
        });
      });
  };

  function handleEmailChange(event) {
    const { value } = event.target;

    setLoginUser((prevUser) => {
      return {
        ...prevUser,
        email: value,
      };
    });
  }

  function handlePasswordChange(event) {
    const { value } = event.target;

    setLoginUser((prevUser) => {
      return {
        ...prevUser,
        password: value,
      };
    });
  }
  return (
    <div className="ManagerLogin">
      <Card sx={{ minWidth: 275 }} className="card">
        <Link to={`/User`} className="btn btn-primary">
          User Login
        </Link>
        <Card.Body>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={Loginuser.email}
            onChange={handleEmailChange}
          />
          <br></br>
          <TextField
            id="outlined-password-input"
            value={Loginuser.password}
            label="Password"
            variant="standard"
            type="password"
            onChange={handlePasswordChange}
          />
          <br />
          <br />
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </Card.Body>
        <br />
        <h6>Don't have an account?</h6>
        <Link to={`/ManagerSignup`} className="btn btn-primary">
          Signup
        </Link>
      </Card>
    </div>
  );
}

export default ManagerLogin;
