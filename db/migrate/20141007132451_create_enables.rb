class CreateEnables < ActiveRecord::Migration
  def change
    create_table :enables do |t|
      t.integer :option_id
      t.integer :enable_element_id

      t.timestamps
    end
  end
end
