import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // React tools for routing (multiple pages)
import "./css/App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import MovieInfo from "./components/MovieInfo";
import MovieUpload from "./components/MovieUpload";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/movie-info" element={<MovieInfo />} />
          <Route path="/movie-upload" element={<MovieUpload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
