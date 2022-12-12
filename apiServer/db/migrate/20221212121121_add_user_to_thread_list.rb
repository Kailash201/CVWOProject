class AddUserToThreadList < ActiveRecord::Migration[7.0]
  def change
    add_column :thread_lists, :user, :string
  end
end
