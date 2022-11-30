import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Navbar, Main, Footer } from "./layout";
import GithubState from "./context/github/githubState";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <Main />
          <Footer />
        </div>
      </Router>
    </GithubState>
  );
};

export default App;