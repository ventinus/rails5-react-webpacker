# == Schema Information
#
# Table name: users
#
#  id           :integer          not null, primary key
#  first_name   :string(255)
#  last_name    :string(255)
#  phone_number :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class User < ApplicationRecord
end
