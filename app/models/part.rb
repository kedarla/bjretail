class Part < ActiveRecord::Base
  belongs_to :garment
  has_many :options
  validates :name, uniqueness: true, presence: true


  has_ancestry
  default_scope order('created_at ASC')

  before_save :change_position

  def parent_enum
    Part.where.not(id: id).map { |p| [ p.name, p.id ] }
  end 

  def display_type_enum
   [['dropdown'],['checkbox'],['textbox'],['radio']]
  end

 def change_position
    if !self.position.blank?
      
    if !self.ancestry.blank?
    existing_model=Part.where("ancestry = #{self.ancestry} and position = #{self.position} and garment_id = #{self.garment_id}") 
    else
    existing_model=Part.where(" position = #{self.position} and garment_id = #{self.garment_id}") 
      
    end 
    
    if !existing_model[0].blank?
       if !self.changes['position'].blank?  
         existing_model[0].update_columns(position: self.changes['position'][0])
        end
    end
    end  
  end 
  
 
end
