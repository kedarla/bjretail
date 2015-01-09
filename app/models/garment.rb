class Garment < ActiveRecord::Base
  has_many :parts
  has_many :orders
  default_scope order('created_at DESC')
end
