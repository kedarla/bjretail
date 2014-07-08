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

ActiveRecord::Schema.define(version: 20140708092340) do

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
  end

  add_index "options", ["part_id"], name: "index_options_on_part_id"

  create_table "parts", force: true do |t|
    t.string   "name"
    t.integer  "garment_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "parts", ["garment_id"], name: "index_parts_on_garment_id"

end
