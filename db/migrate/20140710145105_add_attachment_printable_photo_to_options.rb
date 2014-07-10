class AddAttachmentPrintablePhotoToOptions < ActiveRecord::Migration
  def self.up
    change_table :options do |t|
      t.attachment :printable_photo
    end
  end

  def self.down
    remove_attachment :options, :printable_photo
  end
end
