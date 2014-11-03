class CreatePrintSectionsAndParts < ActiveRecord::Migration
  def change
    create_table :parts_print_sections do |t|
		t.belongs_to :part
      	t.belongs_to :print_section    
    end
  end
end
