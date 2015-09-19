class Disable < ActiveRecord::Base
  belongs_to :option
  #belongs_to :disabler, :class_name => 'Option', :foreign_key => 'disable_element_id',
  belongs_to :disabled, :class_name => 'Option', :foreign_key => 'disable_element_id'
  validates_uniqueness_of :option_id, scope: :disable_element_id
  #validates_uniqueness_of :option_id, conditions: -> { p option_id;p "from mdel";where.not(disable_element_id: self.option_id) }
  before_save :check_uniqueness
  
  def check_uniqueness
    if self.option_id == self.disable_element_id
      errors.add(:option_id,"Option Id And Disable Element Id is same")
      return false
    end
  end

end
