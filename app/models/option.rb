class Option < ActiveRecord::Base
  belongs_to :part
  has_attached_file :photo, :styles => { :small => "150x150>" }
  has_attached_file :printable_photo, :styles => { :small => "150x150>" }
  # validates_attachment_presence :photo
  # validates_attachment_size :photo, :less_than => 5.megabytes
  # validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/jpg', 'image/png']
  # validates_attachment_presence :printable_photo
  # validates_attachment_size :printable_photo, :less_than => 5.megabytes
  # validates_attachment_content_type :printable_photo, :content_type => ['image/jpeg', 'image/jpg', 'image/png']
  default_scope order('created_at DESC')

  has_many :disables, :class_name => 'Disable', :foreign_key => 'option_id'
  has_many :disablers, :class_name => 'Disable', :foreign_key => 'disable_element_id'
end
