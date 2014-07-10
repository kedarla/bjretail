class Option < ActiveRecord::Base
  belongs_to :part
  has_attached_file :photo, :styles => { :small => "150x150>" }
  has_attached_file :print, :styles => { :small => "150x150>" }
  validates_attachment_presence :photo
  validates_attachment_size :photo, :less_than => 5.megabytes
  validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']
  validates_attachment_presence :print
  validates_attachment_size :print, :less_than => 5.megabytes
  validates_attachment_content_type :print, :content_type => ['image/jpeg', 'image/png']
end
