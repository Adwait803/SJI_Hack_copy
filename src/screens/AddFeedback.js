import React, { useState, useEffect, useContext } from "react";
import { TextField, MenuItem } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserContext } from "../UserContext";

const AddUserScreen = () => {
  const { id } = useParams();
  const [FbUser, setFbUser] = useState({});
  const { user } = useContext(UserContext);
  const [addFeedback, setAddFeedBackUser] = useState({});
  const [tempLabels, setTempLables] = useState({});
  const [criteria, setCriteria] = useState({
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

  useEffect(() => {
    const FetchUser = async () => {
      const { data } = await axios.get(`http://localhost:8000/user/${id}`);
      setFbUser(data);
      console.log(data);
    };
    FetchUser();
  }, []);

  //   const judgingCriteria = [
  //     {
  //       judging: [
  //         { 1: "criteria_one", value: "Learning" },
  //         { 2: "criteria_two", value: "Codding Standards" },
  //         { 3: "criteria_three", value: "Personal Growth" },
  //         { 4: "criteria_four", value: "Communication" },
  //         { 5: "criteria_five", value: "" },
  //       ],
  //     },
  //     {
  //       judging: [
  //         { 1: "estimate", value: "Estimate" },
  //         { 2: "BD_estimate", value: "BD Estimate" },
  //         { 3: "code_standard", value: "Code Standard" },
  //         { 4: "okr", value: "OKR" },
  //         { 5: "team_contribution", value: "Team Contribute" },
  //       ],
  //     },
  //     {
  //       judging: [
  //         { 1: "communication", value: "Communication" },
  //         { 2: "marketing", value: "Marketing" },
  //         { 3: "skill_dev", value: "Skill Development" },
  //         { 4: "billable_utilisation", value: "Billable Utilisation" },
  //         { 5: "team_contribution", value: "Team Contribution" },
  //       ],
  //     },
  //   ];

  if (FbUser["designation"] === "Jr. Developer") {
    setAddFeedBackUser({
      user: id,
      month: "January",
      year: 2023,
      criteria_one: { rating: 0, review: "" },
      criteria_two: { rating: 0, review: "" },
      criteria_three: { rating: 0, review: "" },
      criteria_four: { rating: 0, review: "" },
      criteria_five: { rating: 0, review: "" },
    });
    setTempLables({
      one: "Learning",
      two: "Codding Standards",
      three: "Personal Growth",
      four: "Communication",
      five: "Reasoning",
    });
  } else if (FbUser["designation"] === "Developer") {
    setAddFeedBackUser({
      user: id,
      month: "January",
      year: 2023,
      estimate: { rating: 0, review: "" },
      BD_estimate: { rating: 0, review: "" },
      code_standard: { rating: 0, review: "" },
      okr: { rating: 0, review: "" },
      team_contribution: { rating: 0, review: "" },
    });
    setTempLables({
      one: "Estimate",
      two: "BD Estimate",
      three: "Code Standard",
      four: "OKR",
      five: "Team Contribution",
    });
  } else {
    setAddFeedBackUser({
      user: id,
      month: "January",
      year: 2023,
      communication: { rating: 0, review: "" },
      marketing: { rating: 0, review: "" },
      skill_dev: { rating: 0, review: "" },
      billable_utilisation: { rating: 0, review: "" },
      team_contribution: { rating: 0, review: "" },
    });
    setTempLables({
      one: "Communication",
      two: "Marketing",
      three: "Skill Development",
      four: "Billable Utilisation",
      five: "Team Contribution",
    });
  }

  //   useEffect(() => {
  //     const fetchTeams = async () => {
  //       const { data } = await axios.get("http://localhost:8000/team");
  //       setTeams(data);

  //       setAddUser((prevUser) => {
  //         return {
  //           ...prevUser,
  //           team: data[0]["name"],
  //         };
  //       });
  //     };
  //     fetchTeams();
  //   }, []);
  //   function handleClick(event) {
  //     console.log(user);
  //   }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(addFeedback);

    await axios
      .post("http://localhost:8000/user", addFeedback)
      .then((response) => {
        console.log(response.data);
        // console.log(response.data.token);
      });
  };

  //   function handleNameChange(event) {
  //     const { value } = event.target;

  //     setAddFeedBackUser((prevUser) => {
  //       return {
  //         ...prevUser,
  //         name: value,
  //       };
  //     });
  //   }

  function HandleMonthChange(event) {
    const { value } = event.target;

    useEffect(() => {
      setAddFeedBackUser((prevUser) => {
        return {
          ...prevUser,
          month: value,
        };
      });
    }, []);
  }
  function HandleYearChange(event) {
    const { value } = event.target;
    useEffect(() => {
      setAddFeedBackUser((prevUser) => {
        return {
          ...prevUser,
          year: value,
        };
      });
    }, []);
  }

  function HandleRating1Change(event) {
    const { value } = event.target;
    useEffect(() => {
      setCriteria((prevUser) => {
        return {
          ...prevUser,
          rating1: value,
        };
      });
    }, []);
  }
  function HandleReview1Change(event) {
    const { value } = event.target;
    useEffect(() => {
      setCriteria((prevUser) => {
        return {
          ...prevUser,
          review1: value,
        };
      });
    }, []);
  }
  function HandleRating2Change(event) {
    const { value } = event.target;
    useEffect(() => {
      setCriteria((prevUser) => {
        return {
          ...prevUser,
          rating2: value,
        };
      });
    }, []);
  }
  function HandleReview2Change(event) {
    const { value } = event.target;
    useEffect(() => {
      setCriteria((prevUser) => {
        return {
          ...prevUser,
          review2: value,
        };
      });
    }, []);
  }
  function HandleRating3Change(event) {
    const { value } = event.target;
    useEffect(() => {
      setCriteria((prevUser) => {
        return {
          ...prevUser,
          rating3: value,
        };
      });
    }, []);
  }
  function HandleReview3Change(event) {
    const { value } = event.target;
    useEffect(() => {
      setCriteria((prevUser) => {
        return {
          ...prevUser,
          review3: value,
        };
      });
    }, []);
  }
  function HandleRating4Change(event) {
    const { value } = event.target;
    useEffect(() => {
      setCriteria((prevUser) => {
        return {
          ...prevUser,
          rating4: value,
        };
      });
    }, []);
  }
  function HandleReview4Change(event) {
    const { value } = event.target;
    useEffect(() => {
      setCriteria((prevUser) => {
        return {
          ...prevUser,
          review4: value,
        };
      });
    }, []);
  }
  function HandleRating5Change(event) {
    const { value } = event.target;

    useEffect(() => {
      setCriteria((prevUser) => {
        return {
          ...prevUser,
          rating5: value,
        };
      });
    }, []);
  }
  function HandleReview5Change(event) {
    const { value } = event.target;
    useEffect(() => {
      setCriteria((prevUser) => {
        return {
          ...prevUser,
          review5: value,
        };
      });
    }, []);
  }
  return (
    <>
      <Header />
      <br />
      <TextField
        id="standard-select-currency"
        select
        label="Designation"
        defaultValue={addFeedback.month}
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
        label="Designation"
        defaultValue={addFeedback.year}
        variant="standard"
        onChange={HandleYearChange}
      >
        {years.map((option) => (
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
        label="Rating"
        defaultValue={criteria.rating1}
        variant="standard"
        onChange={HandleRating1Change}
      >
        {rating.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <br />
      <TextField
        id="standard-basic"
        label={tempLabels.one}
        variant="standard"
        value={criteria.review1}
        onChange={HandleReview1Change}
      />
      <br />
      <br />
      <TextField
        id="standard-select-currency"
        select
        label="Rating"
        defaultValue={criteria.rating2}
        variant="standard"
        onChange={HandleRating2Change}
      >
        {rating.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <br />
      <TextField
        id="standard-basic"
        label={tempLabels.two}
        variant="standard"
        value={criteria.review2}
        onChange={HandleReview2Change}
      />
      <br />
      <br />
      <TextField
        id="standard-select-currency"
        select
        label="Rating"
        defaultValue={criteria.rating3}
        variant="standard"
        onChange={HandleRating3Change}
      >
        {rating.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <br />
      <TextField
        id="standard-basic"
        label={tempLabels.three}
        variant="standard"
        value={criteria.review3}
        onChange={HandleReview3Change}
      />
      <TextField
        id="standard-select-currency"
        select
        label="Rating"
        defaultValue={criteria.rating4}
        variant="standard"
        onChange={HandleRating4Change}
      >
        {rating.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <br />
      <TextField
        id="standard-basic"
        label={tempLabels.four}
        variant="standard"
        value={criteria.review4}
        onChange={HandleReview4Change}
      />
      <TextField
        id="standard-select-currency"
        select
        label="Rating"
        defaultValue={criteria.rating5}
        variant="standard"
        onChange={HandleRating5Change}
      >
        {rating.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <br />
      <TextField
        id="standard-basic"
        label={tempLabels.five}
        variant="standard"
        value={criteria.review5}
        onChange={HandleReview5Change}
      />
      <button type="button" class="btn btn-primary" onClick={HandleSubmit}>
        Create User
      </button>
      <Footer />
    </>
  );
};

export default AddUserScreen;
