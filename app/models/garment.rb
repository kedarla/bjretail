class Garment < ActiveRecord::Base
  has_many :parts
  #default_scope order('created_at DESC')

end
