class ThreadList < ApplicationRecord
    has_many :comments, dependent: :destroy  

    validates :title, presence: true
    validates :desc, presence: true
   
end
