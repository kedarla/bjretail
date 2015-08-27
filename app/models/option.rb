class Option < ActiveRecord::Base
  belongs_to :part
  validates :name, uniqueness: true, presence: true
  validates :part_id, presence: true
  before_save :change_position
  default_scope order('created_at ASC')

  has_attached_file :photo, :styles => { :small => "150x150>" }
  has_attached_file :printable_photo, :styles => { :small => "150x150>" }

  attr_accessor :delete_photo
  before_validation { self.photo.clear if self.delete_photo == '1' }

  attr_accessor :delete_printable_photo
  before_validation { self.printable_photo.clear if self.delete_printable_photo == '1' }

  before_save :change_position

  # validates_attachment_presence :photo
  # validates_attachment_size :photo, :less_than => 5.megabytes
  # validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/jpg', 'image/png']
  # validates_attachment_presence :printable_photo
  # validates_attachment_size :printable_photo, :less_than => 5.megabytes
  # validates_attachment_content_type :printable_photo, :content_type => ['image/jpeg', 'image/jpg', 'image/png']
  # default_scope order('created_at DESC')

  has_many :disables, :class_name => 'Disable', :foreign_key => 'option_id', :source => :disabled
  has_many :disablers, :class_name => 'Disable', :foreign_key => 'disable_element_id', :source => :disablers

  has_many :enables, :class_name => 'Enable', :foreign_key => 'option_id'
  has_many :enablers, :class_name => 'Enable', :foreign_key => 'enable_element_id'

  has_and_belongs_to_many :print_sections

  validates_attachment_content_type :photo, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  validates_attachment_content_type :printable_photo, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]


 def change_position
    if !self.position.blank?
    existing_model=Option.where("part_id = #{self.part_id} and position = #{self.position}") 
   
    if !existing_model[0].blank?
       if !self.changes['position'].blank?  
         existing_model[0].update_columns(position: self.changes['position'][0])
        end
    end
    end  
  end

end
