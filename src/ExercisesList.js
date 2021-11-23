import React, { useState, useEffect } from "react";
import axios from "axios";
import Exercise from "./Exercise";
import { withRouter } from "react-router-dom";
import { Line } from "react-chartjs-2";
import MyNavBar from "./MyNavBar";
import "./ExerciseList.css";

function ExercisesList() {
  const [listFigures, setListFigures] = useState([]);

  useEffect(() => {
    showExercises();
  }, []);

  // const showExercises = () => {
  //   axios
  //     .get("exercises/", {})
  //     .then((res) => {
  //       setListFigures(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const showExercises = async () => {
    try {
      let fig = await axios.get("exercises/");
      setListFigures(fig.data);
    } catch (error) {
      console.log(error);
    }
  };

  let running = 0;
  let swimming = 0;
  let walking = 0;
  let cycling = 0;
  let count = 1;
  const runningArray = [0];
  const swimmingArray = [0];
  const walkingArray = [0];
  const cyclingArray = [0];
  const labelsArray = [0];

  listFigures.forEach((data) => {
    labelsArray.push(count);
    count++;
    walking += data.walking;
    walkingArray.push(data.walking);
    running += data.running;
    runningArray.push(data.running);
    cycling += data.cycling;
    cyclingArray.push(data.cycling);
    swimming += data.swimming;
    swimmingArray.push(data.swimming);
  });

  const graphdata = {
    labels: labelsArray,
    datasets: [
      {
        label: "Walking",
        data: walkingArray,
        fill: false,
        lineTension: 0.5,
        pointRadius: 0,
        backgroundColor: "#f98806",
        borderColor: "#f98806",
        borderWidth: 2,
      },
      {
        label: "Cycling",
        data: cyclingArray,
        fill: false,
        lineTension: 0.5,
        pointRadius: 0,
        backgroundColor: "#9668f7",
        borderColor: "#9668f7",
        borderWidth: 2,
      },
      {
        label: "Running",
        data: runningArray,
        fill: false,
        lineTension: 0.5,
        pointRadius: 0,
        backgroundColor: "#72e294",
        borderColor: "#72e294",
        borderWidth: 2,
      },
      {
        label: "Swimming",
        data: swimmingArray,
        fill: false,
        lineTension: 0.5,
        pointRadius: 0,
        backgroundColor: "#98c5ff",
        borderColor: "#98c5ff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="ExerciseList">
      <MyNavBar LoggedIn={true} />
      <div className="container">
        <h2> All Fitness Data </h2>
        <div className="col-md-4  mt-5">
          <select className="form-control">
            <option>All Time </option>
            <option>Custom Date </option>
          </select>
        </div>

        <div className=" white__box__graph mt-4">
          <Line
            data={graphdata}
            width={300}
            height={150}
            options={{
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
              maintainAspectRatio: true,
            }}
          />
        </div>

        <div className="routine__div mt-5">
          <Exercise routine="Walking" duration={walking} />
          <Exercise routine="Cycling" duration={cycling} />
          <Exercise routine="Running" duration={running} />
          <Exercise routine="Swimming" duration={swimming} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(ExercisesList);
