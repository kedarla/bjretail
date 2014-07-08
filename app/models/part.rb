class Part < ActiveRecord::Base
  belongs_to :garment
  has_many :options
end
