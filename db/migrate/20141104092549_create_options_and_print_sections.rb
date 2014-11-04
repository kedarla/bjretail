class CreateOptionsAndPrintSections < ActiveRecord::Migration
  def change
    create_table :options_print_sections do |t|
    	t.belongs_to :option
      	t.belongs_to :print_section 
    end
  end
end
