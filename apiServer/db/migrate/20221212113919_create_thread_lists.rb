class CreateThreadLists < ActiveRecord::Migration[7.0]
  def change
    create_table :thread_lists do |t|
      t.integer :id_sec
      t.string :title
      t.text :desc
      t.string :user
      t.integer :like
      t.integer :dislike
      t.integer :comments
      t.datetime :time

      t.timestamps
    end
  end
end
