class WorkoutProgram < ApplicationRecord
  enum category: { yoga: 0, aerobic: 1, gym: 2 }
end
