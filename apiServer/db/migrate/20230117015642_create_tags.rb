class CreateTags < ActiveRecord::Migration[7.0]
  def change
    create_table :tags do |t|
      t.string :name
      t.references :thread_list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
