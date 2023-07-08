import React from "react";
import "./HomePage.css";
import Navbar from "../component/layout/navbar";
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";

const HomePage = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/LoginPage");
  };
  return (
    <>
      <Navbar />
      <div className="mainBody" id="home">
        <div className="content">
          <span className="welcome">Welcome To ,</span>
          <span className="feedgrow">FEEDGROW</span>
          <p className="heading">A Student-Teacher Feedback System</p>
          <p className="intro">
            Platform that connect students with the teachers to solve each other
            problems and Grow Together
          </p>
          <div className="buttons">
            <button className="button1" onClick={handle}>
              <span>Login</span>
            </button>
            <button className="button1" onClick={handle}>
              <span>Register</span>
            </button>
          </div>
        </div>
        <div className="image" onClick={handle}>
          <img
            src="https://img.freepik.com/free-vector/online-review-concept-illustration_114360-1398.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mainBody" id="about">
        <div className="image">
          <img
            src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        <div className="content aboutc">
          <span>about</span>
        </div>
      </div>
      <div className="mainBody" id="contact">
        <div className="content ">
          <span>contact</span>
        </div>
        <div className="image">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
