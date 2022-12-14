# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_13_130057) do
  create_table "comments", force: :cascade do |t|
    t.string "user"
    t.text "desc"
    t.integer "thread_list_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["thread_list_id"], name: "index_comments_on_thread_list_id"
  end

  create_table "thread_lists", force: :cascade do |t|
    t.integer "id_sec"
    t.string "title"
    t.text "desc"
    t.string "user"
    t.integer "like"
    t.integer "dislike"
    t.integer "comments"
    t.datetime "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "comments", "thread_lists"
end
