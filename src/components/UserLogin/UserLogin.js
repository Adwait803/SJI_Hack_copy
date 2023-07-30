import React, { useState, useContext } from "react";
import {
  TextField,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import axios from "axios";
import { EmployeeContext } from "../../EmployeeContext";

import "./style.css";

function UserLogin() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { Euser, setEUser } = useContext(EmployeeContext);

  // function handleClick(event) {
  //   console.log(user);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);

    await axios
      .post("http://localhost:8000/user/login", user)
      .then((response) => {
        console.log(response.data);
        // console.log(response.data.token);
        setEUser({
          id: response.data["_id"],
          name: response.data["name"],
          email: response.data["email"],
          mobile: response.data["mobile"],
          designation: response.data["designation"],
          team: response.data["team"],
          manager: response.data["manager"],
        });
      });
  };

  console.log(Euser);
  function handleEmailChange(event) {
    const { value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        email: value,
      };
    });
  }

  function handlePasswordChange(event) {
    const { value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        password: value,
      };
    });
  }
  return (
    <div className="ManagerLogin">
      <Card sx={{ minWidth: 275 }} className="card">
        <CardContent>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={user.email}
            onChange={handleEmailChange}
          />
          <br></br>
          <TextField
            id="outlined-password-input"
            value={user.password}
            label="Password"
            variant="standard"
            type="password"
            onChange={handlePasswordChange}
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>

          <br />
        </CardActions>
      </Card>
    </div>
  );
}

export default UserLogin;
