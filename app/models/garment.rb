class Garment < ActiveRecord::Base
  has_many :parts, :order => "id DESC"
  has_many :orders
  default_scope order('created_at DESC')
end
