BeerShop.Routers.Beers = Backbone.Router.extend({
  routes: {
    "":          "index",
    "new":       "newBeer",
    "beers/:id": "edit"
  },
  
  index: function() {
    BeerShop.beers = new BeerShop.Collections.Beers();
    BeerShop.beers.fetch({
      success: function(collection, data) {
        new BeerShop.Views.BeersIndex({ collection: collection });
      },
      error: function() {
        new BeerShop.Views.Error({ message: 'Error loading beers.' });
        this.navigate("");
      }      
    });
  },
  
  newBeer: function() {
    new BeerShop.Views.BeerEdit({ model: new BeerShop.Models.Beer() });
  },
  
  edit: function(id) {
    var beer = BeerShop.beers.get(id);
    new BeerShop.Views.BeerEdit({ model: beer });    
  }
});
