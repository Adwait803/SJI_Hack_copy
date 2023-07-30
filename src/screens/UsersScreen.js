import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";
import axios from "axios";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchTeams = async () => {
      const { data } = await axios.get("http://localhost:8000/user");
      setUsers(data);
    };
    fetchTeams();
  }, []);
  return (
    <>
      <Header />
      {users.map((user) => (
        <UserCard
          key={user["_id"]}
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

export default UsersScreen;
