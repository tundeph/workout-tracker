import React, { useState, useEffect } from "react"
import axios from "axios"
import { useQuery } from "react-query"
import { withRouter } from "react-router-dom"

//components
import MyNavBar from "./MyNavBar"
import Exercise from "./Exercise"
import Chart from "./components/Chart"

//styles
import "./ExerciseList.css"

function ExercisesList() {
  const [listFigures, setListFigures] = useState([])

  const fetchExerciseData = async () => {
    const res = await fetch("https://trackfit-tundeph.herokuapp.com/exercises/")
    return res.json()
  }

  const { data, status } = useQuery("exerciseData", fetchExerciseData)
  console.log(data)

  // useEffect(() => {
  //   showExercises()
  // }, [])

  // const showExercises = async () => {
  //   try {
  //     let fig = await axios.get("exercises/")
  //     setListFigures(fig.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  let running = 0,
    swimming = 0,
    walking = 0,
    cycling = 0

  const runningArray = [0]
  const swimmingArray = [0]
  const walkingArray = [0]
  const cyclingArray = [0]
  const labelsArray = [0]

  if (data) {
    data.forEach((data) => {
      walking += data.walking
      walkingArray.push(data.walking)
      running += data.running
      runningArray.push(data.running)
      cycling += data.cycling
      cyclingArray.push(data.cycling)
      swimming += data.swimming
      swimmingArray.push(data.swimming)
    })
  }

  const exercises = [
    { name: "Walking", colour: "#f98806", data: walkingArray },
    { name: "Cycling", colour: "#9668f7", data: cyclingArray },
    { name: "Running", colour: "#72e294", data: runningArray },
    { name: "Swimming", colour: "#98c5ff", data: swimmingArray },
  ]

  const datasets = []
  for (const [key, value] of Object.entries(exercises)) {
    datasets.push({
      label: key,
      data: value,
      fill: false,
      lineTension: 0.5,
      pointRadius: 0,
      backgroundColor: "#f98806",
      borderColor: "#f98806",
      borderWidth: 2,
      animation: false,
    })
  }
  const graphdata = {
    labels: Array.from(Array(walkingArray.length).keys()),
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
        animation: false,
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
        animation: false,
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
        animation: false,
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
        animation: false,
      },
    ],
  }

  return (
    <div className="ExerciseList">
      {data && (
        <>
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
              <Chart data={graphdata} width={300} height={150} />
            </div>

            <div className="routine__div mt-5">
              <Exercise routine="Walking" duration={walking} />
              <Exercise routine="Cycling" duration={cycling} />
              <Exercise routine="Running" duration={running} />
              <Exercise routine="Swimming" duration={swimming} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default withRouter(ExercisesList)
