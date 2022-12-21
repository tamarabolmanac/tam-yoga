import React from "react";
import { Link } from "react-router-dom"
import './WorkoutPrograms.css'


class WorkoutPrograms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workout_programs: [],
      isDialogOpen: false
    }
  }

  componentDidMount() {
    const url = "http://localhost:3000/api/v1/workout_programs";
    fetch(url)
      .then( response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {
        this.setState({ workout_programs: response })
       })
  }

  render() {
    const { workout_programs } =  this.state;
    const allPrograms = workout_programs.map((program, index) => (
      <div key={index} className="col-md-6">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{program.description}</h5>
            <div className="row">
              <div>
                <Link to={`/edit_plan/${program.id}`} className="btn btn-primary ty-edit-button">
                    Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

    const noPrograms = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h6>
          No plans yet. Click above button to create one
        </h6>
      </div>
    );
    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center ty-div-fixed ty-column-left">
          <div className="container py-5">
            <h1 className="display-4 ty-title">Workout plans</h1>
            <p className="lead text-muted">
              Some text about plans, it is going to be added...
            </p>
            <div className="text-right mb-3">
              <Link to="/new_plan" className="btn custom-button ty-button">
                Create New Workout Plan
              </Link>
            </div>
          </div>
        </section>
        <div className="ty-column-right ty-margin-top ty-margin">
          <main className="container">
            <div className="row">
              {allPrograms.length > 0 ? allPrograms : noPrograms}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    )
  }
}

export default WorkoutPrograms;