import React from "react";
import { Link } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";

const TeamCard = (prop) => {
  return (
    <Link to={`/team/${prop.id}`}>
      <div class="card bg-success mb-3" style={{ width: 200 }}>
        <div class="card-body">
          <h4 class="card-title">{prop.teamName}</h4>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
