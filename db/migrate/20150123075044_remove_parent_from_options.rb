class RemoveParentFromOptions < ActiveRecord::Migration
  def change
  	remove_column :options, :parent_id
  end
end
