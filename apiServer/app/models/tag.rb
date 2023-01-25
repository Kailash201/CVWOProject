class Tag < ApplicationRecord
  belongs_to :thread_list
  validates :name, presence: true
end
