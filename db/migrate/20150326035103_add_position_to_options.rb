class AddPositionToOptions < ActiveRecord::Migration
  def change
    add_column :options, :position, :integer, index: true
  end
end
