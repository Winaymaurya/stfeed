import React, { useState } from "react";
import AfterStudentLogin from "./AfterStudentLogin";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");

  const handleLogin = () => {
    // Perform authentication logic here
    // You can use API calls or any other method to send the login data to the server

    if (userType === "student") {
      // Redirect to student dashboard
      window.location.href = "/AfterStudentLogin";
    } else if (userType === "teacher") {
      // Redirect to teacher dashboard
      window.location.href = "/TeacherDashboard";
    } else {
      alert("Invalid user type!");
    }
  };

  return (
    <div className="main">
      <div className="login-card">
        <h2 className="main-heading">Choose Account Type</h2>
        <br />
        <div className="login-select">
          <button
            className={userType === "student" ? "active" : ""}
            onClick={() => setUserType("student")}
          >
            Student
          </button>
          <button
            className={userType === "teacher" ? "active" : ""}
            onClick={() => setUserType("teacher")}
          >
            Teacher
          </button>
        </div>
        <br />

        <label className="user-label" htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <br />
        <label className="pass-label" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <a href="#">No Account?SignUp</a>
        <br />
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
