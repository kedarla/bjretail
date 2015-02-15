class Option < ActiveRecord::Base
  belongs_to :part

  default_scope order('created_at ASC')

  has_attached_file :photo, :styles => { :small => "150x150>" }
  has_attached_file :printable_photo, :styles => { :small => "150x150>" }
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
end
