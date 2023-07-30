import React, { useState, useEffect, useContext } from "react";
import { TextField, MenuItem } from "@mui/material";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserContext } from "../UserContext";

const AddUserScreen = () => {
  const { user } = useContext(UserContext);
  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    designation: "Jr. Developer",
    team: "",
    manager: user.id,
  });
  const [teams, setTeams] = useState([]);
  const designation = ["Jr. Developer", "Developer", "Module Lead"];

  useEffect(() => {
    const fetchTeams = async () => {
      const { data } = await axios.get("http://localhost:8000/team");
      setTeams(data);

      setAddUser((prevUser) => {
        return {
          ...prevUser,
          team: data[0]["name"],
        };
      });
    };
    fetchTeams();
  }, []);
  function handleClick(event) {
    console.log(user);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(addUser);

    await axios.post("http://localhost:8000/user", addUser).then((response) => {
      console.log(response.data);
      // console.log(response.data.token);
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
  function handleMobileChange(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        mobile: value,
      };
    });
  }

  function handleDesignationChange(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        designation: value,
      };
    });
  }
  function handleTeamChange(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        team: value,
      };
    });
  }
  return (
    <>
      <Header />
      <br />
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        value={addUser.name}
        onChange={handleNameChange}
      />
      <br />
      <br />
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        value={addUser.email}
        onChange={handleEmailChange}
      />
      <br />
      <br />
      <TextField
        id="outlined-password-input"
        value={addUser.password}
        label="Password"
        variant="standard"
        type="password"
        onChange={handlePasswordChange}
      />
      <br />
      <br />
      <TextField
        id="outlined-password-input"
        value={addUser.mobile}
        label="Contact No."
        variant="standard"
        onChange={handleMobileChange}
      />
      <br />
      <br />
      <TextField
        id="standard-select-currency"
        select
        label="Designation"
        defaultValue={addUser.designation}
        variant="standard"
        onChange={handleDesignationChange}
      >
        {designation.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <br />
      <TextField
        id="standard-select-currency"
        select
        label="Team"
        defaultValue={addUser.team}
        variant="standard"
        onChange={handleTeamChange}
      >
        {teams.map((team) => (
          <MenuItem key={team["name"]} value={team["_id"]}>
            {team["name"]}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <br />
      <button type="button" class="btn btn-primary" onClick={handleSubmit}>
        Create User
      </button>
      <Footer />
    </>
  );
};

export default AddUserScreen;
