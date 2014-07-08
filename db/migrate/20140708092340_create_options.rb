class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.string :name
      t.references :part, index: true

      t.timestamps
    end
  end
end
