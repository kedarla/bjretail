class AddAncestryToPart < ActiveRecord::Migration
  def change
    add_column :parts, :ancestry, :string
  end

  def self.up
    add_index :parts, :ancestry
  end

  def self.down
    remove_index :parts, :ancestry
  end
end
