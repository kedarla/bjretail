class Enable < ActiveRecord::Base
  belongs_to :option
  belongs_to :enabler, :class_name => 'Option'
end
