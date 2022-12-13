class Comment < ApplicationRecord
  belongs_to :thread_list
  validates :desc, presence: true
end
