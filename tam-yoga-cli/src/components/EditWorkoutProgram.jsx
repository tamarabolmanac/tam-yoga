import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './NewWorkoutPlan.css';
import { useParams } from "react-router";

const EditWorkoutProgram = () => {

  let { id } = useParams();
  
  return (
    <div>
      <div>
        <h2>ID: {id}</h2>
      </div>
    </div>
  );
}

export default EditWorkoutProgram; 