class ThreadList < ApplicationRecord
    belongs_to :profile
    has_many :comments, dependent: :destroy  
    validates :title, presence: true
    validates :desc, presence: true
   
end
