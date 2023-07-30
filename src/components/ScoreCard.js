import React, { useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Button from "react-bootstrap/Button";

import { Card, Row, Col } from "react-bootstrap";
import { CardActionArea, CardActions } from "@mui/material";

function ScoreCard(props) {
  const [isPopoverOpen1, setIsPopoverOpen1] = useState(false);

  const handleButtonClick1 = () => {
    setIsPopoverOpen1(!isPopoverOpen1);
  };

  const [isPopoverOpen2, setIsPopoverOpen2] = useState(false);

  const handleButtonClick2 = () => {
    setIsPopoverOpen2(!isPopoverOpen2);
  };

  const [isPopoverOpen3, setIsPopoverOpen3] = useState(false);

  const handleButtonClick3 = () => {
    setIsPopoverOpen3(!isPopoverOpen3);
  };
  const [isPopoverOpen4, setIsPopoverOpen4] = useState(false);

  const handleButtonClick4 = () => {
    setIsPopoverOpen4(!isPopoverOpen4);
  };

  const [isPopoverOpen5, setIsPopoverOpen5] = useState(false);

  const handleButtonClick5 = () => {
    setIsPopoverOpen5(!isPopoverOpen5);
  };

  return (
    <Card
      className="card text-white bg-success mb-3"
      style={{ width: "30rem" }}
    >
      <span class="badge bg-warning">
        <h5>
          {props.month} {props.year}{" "}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <Rater
            total={1}
            rating={1}
            interactive={false}
            style={{ fontSize: "17px" }}
          ></Rater>{" "}
          {props.avg}
        </h5>
      </span>
      <Card.Header>
        <strong>NAME: {props.name}</strong>
      </Card.Header>

      <Card.Header>
        <strong>Designation: {props.designation}</strong>
      </Card.Header>

      <Card.Body>
        <Card.Title>Communcation</Card.Title>{" "}
        <h2>
          <Rater total={5} rating={props.rating1} interactive={true}></Rater>
          <Button
            variant="contained"
            onClick={handleButtonClick1}
            data-bs-container="body"
            data-toggle="popover"
            data-bs-placement="right"
          >
            <h6>Veiw Feedback</h6>
          </Button>
        </h2>
        {isPopoverOpen1 && (
          <div class="alert alert-dismissible alert-secondary">
            {props.review1}
          </div>
        )}
        <Card.Title>Attire</Card.Title>{" "}
        <h2>
          <Rater total={5} rating={props.rating2} interactive={true}></Rater>
          <Button
            variant="contained"
            onClick={handleButtonClick2}
            data-bs-container="body"
            data-toggle="popover"
            data-bs-placement="right"
          >
            <h6>Veiw Feedback</h6>
          </Button>
        </h2>
        {isPopoverOpen2 && (
          <div class="alert alert-dismissible alert-secondary">
            {props.review2}
          </div>
        )}
        <Card.Title>Team work </Card.Title>{" "}
        <h2>
          <Rater total={5} rating={props.rating3} interactive={true}></Rater>
          <Button
            variant="contained"
            onClick={handleButtonClick3}
            data-bs-container="body"
            data-toggle="popover"
            data-bs-placement="right"
          >
            <h6>Veiw Feedback</h6>
          </Button>
        </h2>
        {isPopoverOpen3 && (
          <div class="alert alert-dismissible alert-secondary">
            {props.review3}
          </div>
        )}
        <Card.Title>Punctuality </Card.Title>{" "}
        <h2>
          <Rater total={5} rating={props.rating4} interactive={true}></Rater>
          <Button
            variant="contained"
            onClick={handleButtonClick4}
            data-bs-container="body"
            data-toggle="popover"
            data-bs-placement="right"
          >
            <h6>Veiw Feedback</h6>
          </Button>
        </h2>
        {isPopoverOpen4 && (
          <div class="alert alert-dismissible alert-secondary">
            {props.review4}
          </div>
        )}
        <Card.Title>Accountability</Card.Title>{" "}
        <h2>
          <Rater total={5} rating={props.rating5} interactive={true}></Rater>
          <Button
            variant="contained"
            onClick={handleButtonClick5}
            data-bs-container="body"
            data-toggle="popover"
            data-bs-placement="right"
          >
            <h6>Veiw Feedback</h6>
          </Button>
        </h2>
        {isPopoverOpen5 && (
          <div class="alert alert-dismissible alert-secondary">
            {props.review5}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ScoreCard;
