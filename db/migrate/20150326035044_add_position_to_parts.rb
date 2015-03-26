class AddPositionToParts < ActiveRecord::Migration
  def change
    add_column :parts, :position, :integer, index: true
  end
end
