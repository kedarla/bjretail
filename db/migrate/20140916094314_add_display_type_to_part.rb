class AddDisplayTypeToPart < ActiveRecord::Migration
  def change
    add_column :parts, :display_type, :string
  end
end
