class Garment < ActiveRecord::Base
  has_many :parts
  has_many :orders
  validates :name, uniqueness: true, presence: true

  default_scope order('created_at ASC')
end
