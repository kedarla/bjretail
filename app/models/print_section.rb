class PrintSection < ActiveRecord::Base
	has_and_belongs_to_many :options
	has_and_belongs_to_many :parts 
	
end
