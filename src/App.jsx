// import { useState } from 'react'
import "./App.css";
import AfterStudentLogin from "./pages/AfterStudentLogin";
import HomePage from "./pages/HomePage";
import Teacherfeedbackquestion from "./pages/Teacherfeedbackquestion";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingUp from "./pages/student/auth/SingUp";
import SingIn from "./pages/student/auth/SingIn";
import SelectTeacher from "./pages/SelectTeacher";
import Teacherprofile from "./pages/Teacherprofile";
import Leaderboard from "./pages/Leaderboard";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public pages */}
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/LoginPage" element={<LoginPage />} />

          {/* private pages */}
          <Route
            exact
            path="/AfterStudentLogin"
            element={<AfterStudentLogin />}
          />

          {/* techersquestions */}
          <Route
            exact
            path="/questions"
            element={<Teacherfeedbackquestion />}
          />

          {/* Selecting teacher */}
          <Route
            exact
            path="/SelectTeacher"
            element={<SelectTeacher title="vinay" />}
          />

          {/* giving feedback */}
          <Route
            exact
            path="/Teacherfeedbackquestion"
            element={<Teacherfeedbackquestion />}
          />

          {/* Teacher profile */}
          <Route exact path="/Teacherprofile" element={<Teacherprofile />} />

          {/* leaderboard */}
          <Route exact path="/Leaderboard" element={<Leaderboard />} />

          {/* User Auth  */}
          <Route exact path="/SingUp" element={<SingUp />} />
          <Route exact path="/SingIn" element={<SingIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
