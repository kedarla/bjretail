class AddGarmentsToOrder < ActiveRecord::Migration
  def change
    add_reference :orders, :garment, index: true
  end
end
