import React from "react";
import { Link } from "react-router-dom";
import './NewWorkoutPlan.css';
import './Dialog.css'
import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Dialog from '../components/DeleteDialog.jsx'

function EditWorkoutProgram() {
  let { id } = useParams();
  const [wp, setWorkoutProgram] = useState(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const url_edit = `http://localhost:3000/api/v1/workout_programs/${id}`

    fetch(url_edit)
      .then(response => response.json())
      .then(json => {
        setWorkoutProgram(json);
        setDescription(json.description);
        setCategory(json.category);
      });
  }, [id]);

  const workout_categories = [
    'yoga', 'gym', 'aerobic'
  ];

  const handleSubmit= e => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/v1/workout_programs/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        description: description,
        category: category
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  const handleOpen= e => {
    setIsDialogOpen(true)

  }

  const handleClose= e => {
    setIsDialogOpen(false)
  }
  
  return (
    <div>
      { wp ?
        <div>
          <h1 className="display-4 ty-title">
            Edit workout plan
          </h1>
          <form onSubmit={e => { handleSubmit(e) }}>
            <div>
              <label className="ty-label" htmlFor="workoutDescription">Workout description</label>
              <textarea
                name="description"
                id="workoutDescription"
                value={description}
                className="form-control new-workout-field"
                required
                onChange={ e => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="ty-label" htmlFor="workoutCategory">Category</label>
              <Dropdown options={workout_categories} onChange={ e => {setCategory(e.value)} } value={category} placeholder="Select category" className='new-workout-field'/>
            </div>
            <button type="submit" className="btn custom-button mt-3 create-workout-button ty-button">
              Save changes
            </button>
            <br/>
            <button onClick={ handleOpen } className="btn btn-link mt-3 ty-button">
              Delete
            </button>
            <Link to="/workout_programs" className="btn btn-link mt-3 ty-float-right ty-link">
              Back to plans
            </Link>

            <div className="container">
                {
                  isDialogOpen &&
                  <Dialog wp={wp} handleClose={handleClose}/>
                }
            </div>
          </form>
        </div>
      :
      "Not loaded yet"
     }
    </div>
  );  
}

export default EditWorkoutProgram; 