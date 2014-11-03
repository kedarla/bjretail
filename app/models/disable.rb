class Disable < ActiveRecord::Base
  belongs_to :option
  belongs_to :disabler, :class_name => 'Option'
  belongs_to :disabled, :class_name => 'Option'
end
