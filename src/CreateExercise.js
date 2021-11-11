import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from "react-router-dom";
import "./CreateExercise.css";
import ExerciseSlider from "./ExerciseSlider";
import { useHistory } from "react-router";
import MyNavBar from "./MyNavBar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function CreateExercise() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "background.paper",
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory();

  // const [username, setUsername] = useState("");
  // const [description, setDescription] = useState("");
  // const [duration, setDuration] = useState("");
  // const [date, setDate] = useState(new Date());
  // const [users, setUsers] = useState([]);

  const [walkingMins, setWalkingMins] = useState(0);
  const [runningMins, setRunningMins] = useState(0);
  const [cyclingMins, setCyclingMins] = useState(0);
  const [swimmingMins, setSwimmingMins] = useState(0);

  const storeExercise = () => {
    axios
      .post("exercises/add", {
        walking: walkingMins,
        running: runningMins,
        cycling: cyclingMins,
        swimming: swimmingMins,
      })
      .then()
      .catch((err) => {
        console.log(err);
      });
    handleOpen();
  };

  return (
    <div className="createExercise">
      <MyNavBar />
      <div className="container">
        <h2> Enter your recent fitness </h2> <h2>routine</h2>
        <span className="sub__text">
          {" "}
          How many minutes did you spend on the fitness routines listed below?{" "}
        </span>
        <ExerciseSlider
          routine="walking"
          mins={walkingMins}
          setVal={setWalkingMins}
        />
        <ExerciseSlider
          routine="running"
          mins={runningMins}
          setVal={setRunningMins}
        />
        <ExerciseSlider
          routine="cycling"
          mins={cyclingMins}
          setVal={setCyclingMins}
        />
        <ExerciseSlider
          routine="swimming"
          mins={swimmingMins}
          setVal={setSwimmingMins}
        />
        <div>
          <button
            type="submit"
            className=" btn red__button"
            onClick={() => {
              storeExercise();
            }}
          >
            Record Routine
          </button>
        </div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onBackdropClick={() => {
              history.push("/list");
            }}
          >
            <Box sx={style} className="modal__box">
              <CheckCircleOutlineIcon className="modal__check" />
              <h2>Successfully recorded.</h2>
              <button
                type="submit"
                className=" btn red__button"
                onClick={() => {
                  history.push("/list");
                }}
              >
                Go to Dashboard
              </button>
            </Box>
          </Modal>
        </div>
        {/* <form>
          <div className="form-group mt-4">
            <label>Username: </label>
            <select
              className="form-select"
              value={username}
              // onClick={updateUsersList()}
              onChange={(e) => setUsername(e.target.value)}
            >
              <option value="" disabled>
                Select a User
              </option>
              {users.map((us) => {
                return (
                  <option key={us._id} value={us.username}>
                    {us.username}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group mt-4">
            <label>Type of Exercise: </label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group mt-4">
            <label>Duration of Exercise (in minutes): </label>
            <input
              type="number"
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          <div className="form-group mt-4">
            <label>Date: </label>
            <DatePicker
              className="form-control"
              format="dd/MM/y"
              selected={date}
              onChange={setDate}
            />
          </div>

          <button
            type="submit"
            className=" form-control btn btn-dark btn-lg btn-block mt-4"
            onClick={storeExercise}
          >
            Record Exercise{" "}
          </button>
        </form> */}
      </div>
    </div>
  );
}

export default withRouter(CreateExercise);
