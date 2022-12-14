import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"
import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import WorkoutProgram from "../src/components/WorkoutPrograms";
import NewWorkoutProgram from "../src/components/NewWorkoutProgram";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/workout_programs" element={<WorkoutProgram />} />
        <Route path="/new_plan" element={<NewWorkoutProgram />} />
      </Routes>
    </div>
  )
}

export default App;