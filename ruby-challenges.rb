# # ASSESSMENT 5: Ruby Coding Practical Questions
# # MINASWAN

# # --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# # Expected output: ['tea', 'water', 'soda water']

def filtered_beverages array, filtered_letter
  array.select { |bev| bev.include?filtered_letter }
end

p filtered_beverages(beverages_array, filter_letter_o)
p filtered_beverages(beverages_array, filter_letter_t)

# # -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# # HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def state_method hash 
    hash.values.flatten.sort
end
p state_method(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
  
  def initialize(model)
    @model = model
    @wheels = 2
    @current_speed = 0
  end

  def set_model(model)
    @model = model
  end

  def get_model
    @model
  end

  def set_wheels_count
    @wheels += 2
  end
  
  def get_wheels
    @wheels
  end

  def set_current_speed
    @current_speed
  end

  def get_current_speed
    @current_speed
  end

  def bike_info
    "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph." 
  end

  def pedal_faster mph
      @current_speed = mph + @current_speed
  end

  def brake mph2
      @current_speed = @current_speed - mph2 
    if @current_speed < 0
      @current_speed = 0
    end
    @current_speed
  end

end

trek = Bike.new('Trek Bike')
p trek.bike_info

p trek.pedal_faster(10)
p trek.pedal_faster(18)
p trek.brake(6)
p trek.brake(25)



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
