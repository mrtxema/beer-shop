class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :brewer
      t.string :name
      t.string :style
      t.float :abv
      t.float :ibu

      t.timestamps
    end
  end
end
