import React from "react";
import { Switch } from "react-router-dom";
import ExercisesList from "./ExercisesList";
import EditExercise from "./EditExercise";
import CreateExercise from "./CreateExercise";
import CreateUser from "./CreateUser";
import ProtectedRoute from "./ProtectedRoute";

function In() {
  return (
    <div>
      <Switch>
        <ProtectedRoute path="/list" exact component={ExercisesList} />
        <ProtectedRoute path="/create" exact component={CreateExercise} />
        <ProtectedRoute path="/edit/:id" exact component={EditExercise} />
        <ProtectedRoute path="/user" exact component={CreateUser} />
      </Switch>
    </div>
  );
}

export default In;
