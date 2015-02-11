class Enable < ActiveRecord::Base
  belongs_to :option
  #belongs_to :enabler, :class_name => 'Option'
  #belongs_to :enabled, :class_name => 'Option'
  belongs_to :enabled, :class_name => 'Option', :foreign_key => 'enable_element_id'

end
