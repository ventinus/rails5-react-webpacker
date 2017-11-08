# == Schema Information
#
# Table name: courses
#
#  id              :integer          not null, primary key
#  title           :string(255)
#  available_spots :integer
#  start_time      :datetime
#  duration        :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Course < ApplicationRecord
  has_many :reservations
  has_many :users, through: :reservations
end
