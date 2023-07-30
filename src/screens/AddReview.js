import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { TextField, MenuItem } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AddReview = () => {
  const { id } = useParams();
  const [addUser, setAddUser] = useState({
    user: id,
    month: "January",
    year: 2023,
    rating1: 0,
    review1: "",
    rating2: 0,
    review2: "",
    rating3: 0,
    review3: "",
    rating4: 0,
    review4: "",
    rating5: 0,
    review5: "",
    designation: "Jr. Developer",
  });

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = [2020, 2021, 2022, 2023];
  const rating = [1, 2, 3, 4, 5];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      user: id,
      designation: addUser.designation,
      month: addUser.month,
      year: addUser.year,
      criteria_one: { rating: addUser.rating1, review: addUser.review1 },
      criteria_two: { rating: addUser.rating2, review: addUser.review2 },
      criteria_three: { rating: addUser.rating3, review: addUser.review3 },
      criteria_four: { rating: addUser.rating4, review: addUser.review4 },
      criteria_five: { rating: addUser.rating5, review: addUser.review5 },
    };

    await axios.post("http://localhost:8000/jd", post).then((response) => {
      console.log(response.data);
      // console.log(response.data.token);
    });
  };

  function HandleMonthChange(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        month: value,
      };
    });
  }

  function HandleYearChange(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        year: value,
      };
    });
  }
  function HandleReview1Change(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        review1: value,
      };
    });
  }
  function HandleReview2Change(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        review2: value,
      };
    });
  }
  function HandleReview3Change(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        review3: value,
      };
    });
  }
  function HandleReview4Change(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        review4: value,
      };
    });
  }
  function HandleReview5Change(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        review5: value,
      };
    });
  }

  function HandleRating1Change(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        rating1: value,
      };
    });
  }
  function HandleRating2Change(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        rating2: value,
      };
    });
  }
  function HandleRating3Change(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        rating3: value,
      };
    });
  }
  function HandleRating4Change(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        rating4: value,
      };
    });
  }
  function HandleRating5Change(event) {
    const { value } = event.target;

    setAddUser((prevUser) => {
      return {
        ...prevUser,
        rating5: value,
      };
    });
  }
  return (
    <>
      <Header />
      <br />
      <TextField
        id="standard-select-currency"
        select
        label="Month"
        defaultValue={addUser.month}
        variant="standard"
        onChange={HandleMonthChange}
      >
        {months.map((option) => (
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
        label="Year"
        defaultValue={addUser.year}
        variant="standard"
        onChange={HandleYearChange}
      >
        {years.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <br /> <br />
      Communication:
      <br />
      <TextField
        id="standard-select-currency"
        select
        label="Rating"
        defaultValue={addUser.rating1}
        variant="standard"
        onChange={HandleRating1Change}
      >
        {rating.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="standard-basic"
        label="Feedback"
        variant="standard"
        value={addUser.review1}
        onChange={HandleReview1Change}
      />
      <br /> <br />
      Reasoning:
      <br />
      <TextField
        id="standard-select-currency"
        select
        label="Rating "
        defaultValue={addUser.rating2}
        variant="standard"
        onChange={HandleRating2Change}
      >
        {rating.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="standard-basic"
        label="Feedback"
        variant="standard"
        value={addUser.review2}
        onChange={HandleReview2Change}
      />
      <br /> <br />
      Coding Standards:
      <br />
      <TextField
        id="standard-select-currency"
        select
        label="Rating"
        defaultValue={addUser.rating3}
        variant="standard"
        onChange={HandleRating3Change}
      >
        {rating.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="standard-basic"
        label="Feeedback"
        variant="standard"
        value={addUser.review3}
        onChange={HandleReview3Change}
      />
      <br /> <br />
      Learning:
      <br />
      <TextField
        id="standard-select-currency"
        select
        label="Rating"
        defaultValue={addUser.rating4}
        variant="standard"
        onChange={HandleRating4Change}
      >
        {rating.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="standard-basic"
        label="Feedback"
        variant="standard"
        value={addUser.review4}
        onChange={HandleReview4Change}
      />
      <br /> <br />
      Personal Growth:
      <br />
      <TextField
        id="standard-select-currency"
        select
        label="Rating"
        defaultValue={addUser.rating5}
        variant="standard"
        onChange={HandleRating5Change}
      >
        {rating.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="standard-basic"
        label="Feedback"
        variant="standard"
        value={addUser.review5}
        onChange={HandleReview5Change}
      />
      <br /> <br />
      <button type="button" class="btn btn-primary" onClick={handleSubmit}>
        Post Feedback
      </button>
      <Footer />
    </>
  );
};

export default AddReview;
