class AddParentIdToOption < ActiveRecord::Migration
  def change
    add_column :options, :parent_id, :integer
  end
end
