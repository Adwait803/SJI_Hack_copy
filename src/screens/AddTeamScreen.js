import React, { useState } from "react";
import { TextField } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
const AddTeamsScreen = () => {
  const [Name, setName] = useState("");

  // function handleClick(event) {
  //   console.log(Name);
  // }

  function handleChange(event) {
    const { value } = event.target;

    setName(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const team = { name: Name };

    await axios.post("http://localhost:8000/team", team).then((response) => {
      console.log(response.status);
      console.log(response.data.token);
    });
  };
  return (
    <>
      <Header />
      <br />
      <br />
      <TextField
        id="standard-basic"
        label="Team Name"
        variant="standard"
        value={Name}
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="button" class="btn btn-primary" onClick={handleSubmit}>
        Create Team
      </button>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default AddTeamsScreen;
