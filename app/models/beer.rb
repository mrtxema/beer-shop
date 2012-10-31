class Beer < ActiveRecord::Base
  attr_accessible :abv, :brewer, :ibu, :name, :style

  validates :name,   :presence => true
  validates :brewer, :presence => true
  validates :abv,    :numericality => { :greater_than_or_equal_to => 0 },
                     :allow_nil => true
  validates :ibu,    :numericality => { :greater_than_or_equal_to => 0 },
                     :allow_nil => true
end
