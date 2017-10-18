
User.delete_all
Course.delete_all
Instructor.delete_all
Location.delete_all


puts 'Creating Users'
100.times do
  User.create!({
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone_number: Faker::PhoneNumber.phone_number
  })
end


puts 'Creating Courses'
20.times do |n|
  Course.create!({
    title: Faker::Company.name,
    available_spots: rand(0..30),
    start_time: Faker::Time.forward(7, :day),
    duration: [30, 45, 60].sample
  })
end

puts 'Creating Instructors'
20.times do
  Instructor.create!({
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
  })
end

puts 'Creating Locations'
20.times do
  Location.create!({
    name: Faker::Address.street_name
  })
end
