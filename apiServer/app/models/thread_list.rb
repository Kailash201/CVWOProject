class ThreadList < ApplicationRecord
    validates :title, presence: true
    validates :desc, presence: true
   
end
