// src/App.js
import React, { useState, useEffect } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutChart from "./components/WorkoutChart";
import "./styles.css";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  // Load data from local storage on mount
  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts"));
    if (storedWorkouts) setWorkouts(storedWorkouts);
  }, []);

  // Save to local storage when workouts change
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  // Function to add a new workout
  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div className="app-container">
      <h1>Fitness Tracker Dashboard</h1>
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutChart data={workouts} />
    </div>
  );
};

export default App;
