class Part < ActiveRecord::Base
  belongs_to :garment
  has_many :options

  has_and_belongs_to_many :print_sections

  has_ancestry


  def parent_enum
    Part.where.not(id: id).map { |p| [ p.name, p.id ] }
  end 
end
