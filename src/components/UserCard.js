import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserCard = (props) => {
  return (
    <Link to={`/user/${props.id}`}>
      <div class="card" style={{ width: 300 }}>
        <div class="card-body">
          <h4 class="card-title">{props.name}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{props.designation}</h6>
          <p class="card-text">{props.team}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
