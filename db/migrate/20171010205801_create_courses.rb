class CreateCourses < ActiveRecord::Migration[5.0]
  def change
    create_table :courses do |t|
      t.string :title
      t.integer :available_spots
      t.datetime :start_time
      t.integer :duration

      t.timestamps
    end
  end
end
