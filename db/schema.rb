# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150109113301) do

  create_table "disables", force: true do |t|
    t.integer  "option_id"
    t.integer  "disable_element_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "enables", force: true do |t|
    t.integer  "option_id"
    t.integer  "enable_element_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "garments", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "options", force: true do |t|
    t.string   "name"
    t.integer  "part_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.string   "printable_photo_file_name"
    t.string   "printable_photo_content_type"
    t.integer  "printable_photo_file_size"
    t.datetime "printable_photo_updated_at"
    t.boolean  "is_default"
    t.integer  "parent_id"
  end

  add_index "options", ["part_id"], name: "index_options_on_part_id"

  create_table "options_print_sections", force: true do |t|
    t.integer "option_id"
    t.integer "print_section_id"
  end

  create_table "orders", force: true do |t|
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "garment_id"
  end

  add_index "orders", ["garment_id"], name: "index_orders_on_garment_id"

  create_table "parts", force: true do |t|
    t.string   "name"
    t.integer  "garment_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "ancestry"
    t.string   "display_type"
  end

  add_index "parts", ["garment_id"], name: "index_parts_on_garment_id"

  create_table "parts_print_sections", force: true do |t|
    t.integer "part_id"
    t.integer "print_section_id"
  end

  create_table "print_sections", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
