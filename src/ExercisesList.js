import React, { useState, useEffect } from "react";
import axios from "axios";
import Exercise from "./Exercise";
import { withRouter } from "react-router-dom";
import MyNavBar from "./MyNavBar";
import "./ExerciseList.css";

function ExercisesList() {
  const [listExercises, setListExercises] = useState([]);

  useEffect(() => {
    showExercises();
  }, []);

  const showExercises = () => {
    axios
      .get("exercises/", {})
      .then((res) => {
        setListExercises(res.data);
        // alert(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteExercise = (id) => {
    axios
      .delete("exercises/" + id)
      .then((res) => {
        showExercises();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <MyNavBar LoggedIn={true} />
      <div className="container">
        <h2> All Health Data </h2>
        <div>
          {listExercises.map((data) => {
            return (
              <div className="" key={data._id}>
                <Exercise
                  username={data.username}
                  description={data.description}
                  duration={data.duration}
                  date={data._date}
                  onPress={() => {
                    deleteExercise(data._id);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withRouter(ExercisesList);
