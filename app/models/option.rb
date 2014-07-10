class Option < ActiveRecord::Base
  belongs_to :part
  has_attached_file :photo, :styles => { :small => "150x150>" }
  has_attached_file :print, :styles => { :small => "150x150>" }
end
