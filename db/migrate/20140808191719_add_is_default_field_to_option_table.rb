class AddIsDefaultFieldToOptionTable < ActiveRecord::Migration
  def change
    add_column :options, :is_default, :boolean
  end
end
