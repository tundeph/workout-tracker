import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Login";

// import MyNavBar from "./MyNavBar";
import In from "./In";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Login} />
        <In />
      </Router>
    </div>
  );
}

export default App;
