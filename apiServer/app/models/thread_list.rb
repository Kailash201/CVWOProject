class ThreadList < ApplicationRecord
    has_many :comments

    validates :title, presence: true
    validates :desc, presence: true
   
end
