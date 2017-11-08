class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|

      t.belongs_to :user, index: true
      t.belongs_to :course, index: true
      t.timestamps
    end
  end
end
