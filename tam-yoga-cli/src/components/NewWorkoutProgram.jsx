import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './NewWorkoutPlan.css';

class NewWorkoutProgram extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      category: "yoga"
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);

    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSelect(event) {
    this.setState({ category: event.value })
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3000/api/v1/workout_programs";

    const { description, category } = this.state;

    if (description.length == 1 || category.length == 1)
      return;
    
    const body = {
      description,
      category
    }
    //const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok");
    })
    .then(response => this.props.history.push('workout_program/&{response.id}'))
    .catch(error => console.log(error.message));
  }

  render() {
    const workout_categories = [
      'yoga', 'gym', 'aerobic'
    ];
    const defaultOption = workout_categories[0];

    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="display-4 ty-title">
              Add a new plan to your awesome workout collection
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label className="ty-label" htmlFor="workoutDescription">Workout description</label>
                <textarea
                  name="description"
                  id="workoutDescription"
                  className="form-control new-workout-field"
                  required
                  onChange={this.onChange}
                />
              </div>
              <br/>
              <div className="form-group">
                <label className="ty-label" htmlFor="workoutCategory">Category</label>
                
                <Dropdown options={workout_categories} onChange={this.onSelect} value={defaultOption} placeholder="Select category" className='new-workout-field'/>
              </div>
              <button type="submit" className="btn custom-button mt-3 create-workout-button ty-button">
                Create Plan
              </button>
              <br/>
              <Link to="/workout_programs" className="btn btn-link mt-3">
                Back to plans
              </Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default NewWorkoutProgram; 