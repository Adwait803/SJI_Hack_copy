import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";

const TeamCardScreen = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  var team = [];

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`http://localhost:8000/user`);
      setUsers(data);
    };
    fetchProduct();
  }, []);

  users.forEach((user) => {
    if (user["team"]["_id"] === id) {
      team.push(user);
    }
  });

  return (
    <>
      <Header />
      {team.map((user) => (
        <UserCard
          id={user["_id"]}
          name={user["name"]}
          designation={user["designation"]}
          team={user["team"]["name"]}
        />
      ))}

      <Footer />
    </>
  );
};

export default TeamCardScreen;
