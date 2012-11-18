class Beer < ActiveRecord::Base
  attr_accessible :abv, :brewer, :ibu, :name, :style

  validates :name,   :length => { :in => 3..20 }
  validates :brewer, :length => { :in => 3..30 }
  validates :style,  :length => { :in => 3..20 },
                     :allow_blank => true
  validates :abv,    :numericality => { :greater_than_or_equal_to => 0, :less_than_or_equal_to => 100 },
                     :allow_nil => true
  validates :ibu,    :numericality => { :greater_than_or_equal_to => 0, :less_than_or_equal_to => 999 },
                     :allow_nil => true
end
