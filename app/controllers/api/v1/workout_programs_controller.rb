class Api::V1::WorkoutProgramsController < ApplicationController
  before_action :set_workout_program, only: %i[show, destroy, update]

  def index
    workout_programs = WorkoutProgram.all
    
    render json: workout_programs
  end

  def create
    WorkoutProgram.create(wp_params)
  end

  def destroy
    @workout_program&.destroy
    render json: { message: 'Program deleted!' }
  end

  def show
    wp = WorkoutProgram.find(params[:id])
    
    render json: wp
  end

  def update
    @workout_program.update!(wp_params)
    render json: @workout_programs
  end

  private

  def wp_params
    params.require(:workout_program).permit(:description, :category)
  end
  
  def set_workout_program
    @workout_program = WorkoutProgram.find(params[:id])
  end
end
