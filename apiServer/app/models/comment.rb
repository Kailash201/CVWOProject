class Comment < ApplicationRecord
  belongs_to :thread_list
  #has_one :profile
  validates :desc, presence: true
end
