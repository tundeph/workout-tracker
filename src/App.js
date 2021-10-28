import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExercisesList from "./ExercisesList";
import EditExercise from "./EditExercise";
import CreateExercise from "./CreateExercise";
import CreateUser from "./CreateUser";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="">
        <Route path="/" exact component={Login} />
        <ProtectedRoute path="/list" exact component={ExercisesList} />
        <ProtectedRoute path="/create" exact component={CreateExercise} />
        <ProtectedRoute path="/edit/:id" exact component={EditExercise} />
        <ProtectedRoute path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
