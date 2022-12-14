class Api::V1::WorkoutProgramsController < ApplicationController
  before_action :set_workout_program, only: %i[show, destroy]

  def index
    workout_programs = WorkoutProgram.all
    byebug
    render json: workout_programs
  end

  def create
    WorkoutProgram.create(wp_params)
  end

  def destroy
    @workout_program&.destroy
    render json: { message: 'Program deleted!' }
  end

  private

  def wp_params
    params.permit(:description, :category)
  end
  
  def set_workout_program
    @workout_program = WorkoutProgram.find(oarams[:id])
  end
end
