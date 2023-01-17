class CreateThreadLists < ActiveRecord::Migration[7.0]
  def change
    create_table :thread_lists do |t|
      t.string :title
      t.text :desc
      t.string :user
      t.integer :like
      t.integer :dislike
      t.integer :comments
      t.references :profile, null: false, foreign_key: true
      t.timestamps
    end
  end
end
