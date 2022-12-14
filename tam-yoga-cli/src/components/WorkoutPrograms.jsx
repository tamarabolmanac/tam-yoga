import React from "react";
import { Link } from "react-router-dom" 

class WorkoutPrograms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workout_programs: []
    }
  }

  componentDidMount() {
    const url = "http://localhost:3000/api/v1/workout_programs";
    fetch(url)
      .then( response => {
        if (response.ok) {
          debugger
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {
        debugger
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
            <div className="col-sm-12 col-lg-2">
              <button
                type="button"
                className="btn btn-danger"
              >
                Delete Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    ));

    const noPrograms = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No plans yet. Why not <Link to="/new_plan">create one</Link>
        </h4>
      </div>
    );
    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Workout plans</h1>
            <p className="lead text-muted">
              Some text about plans, it is going to be added...
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/new_plan" className="btn custom-button">
                Create New Workout Plan
              </Link>
            </div>
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