import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

export default () => (
  <div className="jumbotron jumbotron-fluid bg-transparent">
    <div className="container secondary-color">
      <h1 className="display-4 ty-title">Yoga classes</h1>
      <p className="lead">
        Some description that is not set yet
      </p>
      <hr className="my-4" />
      <Link
        to="/workout_programs"
        className="btn btn-lg custom-button ty-button"
        role="button"
      >
        View Classes
      </Link>
    </div>
  </div>
);