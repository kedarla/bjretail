class Part < ActiveRecord::Base
  belongs_to :garment
  has_many :options, :order => "id DESC"

  has_ancestry


  def parent_enum
    Part.where.not(id: id).map { |p| [ p.name, p.id ] }
  end 

  def display_type_enum
   [['dropdown'],['checkbox'],['textbox'],['radio']]
  end
end
