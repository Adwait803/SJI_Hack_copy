import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { EmployeeContext } from "../EmployeeContext";

import UserHeader from "../components/UserHeader";
import Footer from "../components/Footer";
import ScoreCard from "../components/ScoreCard";

const UserCardScreen = () => {
  const navigate = useNavigate();

  const { Euser, setEUser } = useContext(EmployeeContext);
  const [posts, setPosts] = useState([]);
  //   const { id } = useParams();

  //   useEffect(() => {
  //     const fetchProduct = async () => {
  //       const { data } = await axios.get(`http://localhost:8000/user/${id}`);
  //       setUser(data);
  //       console.log(data);
  //     };
  //     fetchProduct();
  //   }, []);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/jd/user/${Euser.id}`
      );
      setPosts(data);
      console.log(posts);
    };
    fetchPost();
  }, []);

  return (
    <>
      <UserHeader />
      <button
        className="btn btn-primary"
        onClick={() => {
          setEUser(null);
          navigate("/");
        }}
      >
        Logout
      </button>
      <div>
        {Euser != null ? Euser.id : ""}
        <br />
        {Euser != null ? Euser.name : ""}
        <br />
        {Euser != null ? Euser.designation : ""}
        <br />
        {Euser != null ? Euser.email : ""}
        <br />
        <br />
      </div>
      {posts.map((post) => {
        return (
          <ScoreCard
            month={post.month}
            year={post.year}
            name={post.user.name}
            avg={post.average}
            designation={post.user.designation}
            rating1={post.criteria_one.rating}
            rating2={post.criteria_two.rating}
            rating3={post.criteria_three.rating}
            rating4={post.criteria_four.rating}
            rating5={post.criteria_five.rating}
            review1={post.criteria_one.review}
            review2={post.criteria_two.review}
            review3={post.criteria_three.review}
            review4={post.criteria_four.review}
            review5={post.criteria_five.review}
          />
        );
      })}

      <Footer />
    </>
  );
};

export default UserCardScreen;
