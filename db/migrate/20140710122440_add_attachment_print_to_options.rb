class AddAttachmentPrintToOptions < ActiveRecord::Migration
  def self.up
    change_table :options do |t|
      t.attachment :print
    end
  end

  def self.down
    remove_attachment :options, :print
  end
end
