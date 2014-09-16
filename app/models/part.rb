class Part < ActiveRecord::Base
  belongs_to :garment
  has_many :options
  has_ancestry


  def parent_enum
    Part.where.not(id: id).map { |p| [ p.name, p.id ] }
  end 
end
