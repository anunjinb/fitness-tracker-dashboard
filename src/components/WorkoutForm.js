import React, { useState } from "react";

const WorkoutForm = ({ addWorkout }) => {
  const [workout, setWorkout] = useState({
    type: "",
    duration: "",
    calories: "",
  });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workout.type || !workout.duration || !workout.calories) return;
    addWorkout(workout);
    setWorkout({ type: "", duration: "", calories: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="type" value={workout.type} onChange={handleChange} placeholder="Workout Type" />
      <input name="duration" value={workout.duration} onChange={handleChange} placeholder="Duration (min)" />
      <input name="calories" value={workout.calories} onChange={handleChange} placeholder="Calories Burned" />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
