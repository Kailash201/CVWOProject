class Profile < ApplicationRecord
    has_many :thread_list
    has_many :comments, through: :thread_list
end
