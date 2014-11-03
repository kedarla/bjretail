class CreatePrintSections < ActiveRecord::Migration
  def change
    create_table :print_sections do |t|
      t.string :name

      t.timestamps
    end
  end
end
