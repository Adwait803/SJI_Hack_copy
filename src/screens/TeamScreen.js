import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import axios from "axios";

const TeamScreen = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchTeams = async () => {
      const { data } = await axios.get("http://localhost:8000/team");
      setTeams(data);
    };
    fetchTeams();
  }, []);
  return (
    <>
      <Header />
      {teams.map((team) => (
        <TeamCard key={team["_id"]} teamName={team["name"]} id={team["_id"]} />
      ))}

      <Footer />
    </>
  );
};

export default TeamScreen;
