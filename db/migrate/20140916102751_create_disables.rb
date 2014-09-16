class CreateDisables < ActiveRecord::Migration
  def change
    create_table :disables do |t|
      t.integer :option_id
      t.integer :disable_element_id

      t.timestamps
    end
  end
end
