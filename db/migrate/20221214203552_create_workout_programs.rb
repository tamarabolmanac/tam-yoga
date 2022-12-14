class CreateWorkoutPrograms < ActiveRecord::Migration[7.0]
  def change
    create_table :workout_programs do |t|
      t.string :description
      t.integer :category

      t.timestamps
    end
  end
end
