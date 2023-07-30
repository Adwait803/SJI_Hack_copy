import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserContext } from "../UserContext";

const ProfileScreen = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <Header />

      {user != null ? user.id : ""}
      <br />
      {user != null ? user.email : ""}
      <br />
      {user != null ? user.name : ""}
      <br />
      {user != null ? user.mobile : ""}
      <button
        className="btn btn-primary"
        onClick={() => {
          setUser(null);
        }}
      >
        Logout
      </button>
      <Footer />
    </>
  );
};

export default ProfileScreen;
