import React, { useState, useEffect } from "react";
import axios from "axios";
import Exercise from "./Exercise";

function ExercisesList() {
  const [listExercises, setListExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/", {})
      .then((res) => {
        setListExercises(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const showExercises = () => {
    axios
      .get("http://localhost:5000/exercises/", {})
      .then((res) => {
        setListExercises(res.data);
        // alert(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => {
        showExercises();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2> Exercises Dashboard </h2>
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
  );
}

export default ExercisesList;
