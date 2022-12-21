import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"
import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import './style/links.css'
import Home from "./components/Home"
import WorkoutProgram from "../src/components/WorkoutPrograms";
import NewWorkoutProgram from "../src/components/NewWorkoutProgram";
import EditWorkoutProgram from "../src/components/EditWorkoutProgram"

function App() {
  return (
    <div className="App">
      <div className="vw-100 vh-100 primary-color align-items-center justify-content-center">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/workout_programs" element={<WorkoutProgram />} />
          <Route path="/new_plan" element={<NewWorkoutProgram />} />
          <Route path="/edit_plan/:id" element={<EditWorkoutProgram />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;