import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScoreCard from "../components/ScoreCard";

const UserCardScreen = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`http://localhost:8000/user/${id}`);
      setUser(data);
      // const { pdata } = await axios.get(`http://localhost:8000/jd/`);
      // setPosts(pdata);
      // console.log(pdata);
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(`http://localhost:8000/jd/user/${id}`);
      setPosts(data);
      console.log(posts);
    };
    fetchPost();
  }, []);
  console.log(posts);
  return (
    <>
      <Header />
      <Link to={`/review/${id}`} className="btn btn-primary">
        Add Feedback
      </Link>

      <div>
        <h6> {user["name"]}</h6>
        <h6> {user["designation"]}</h6>
        {/* <h6> {user["team"]["name"]}</h6> */}
        <h6> {user["email"]}</h6>
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

      {posts.map(() => {
        return;
      })}

      <Footer />
    </>
  );
};

export default UserCardScreen;
