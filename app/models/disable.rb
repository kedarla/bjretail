class Disable < ActiveRecord::Base
  belongs_to :option
  #belongs_to :disabler, :class_name => 'Option', :foreign_key => 'disable_element_id',
  belongs_to :disabled, :class_name => 'Option', :foreign_key => 'disable_element_id'
end
