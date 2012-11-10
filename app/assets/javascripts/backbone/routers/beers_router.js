BeerShop.Routers.Beers = Backbone.Router.extend({
  routes: {
    "":          "index",
    "new":       "newBeer",
    "beers/:id": "edit"
  },
  
  index: function() {
    var beers = new BeerShop.Collections.Beers();
    beers.fetch({
      success: function(collection, data) {
        var view = new BeerShop.Views.BeersIndex({ collection: collection });
        $('#app').html(view.render().el);
      },
      error: function() {
        new Error({ message: 'Error loading beers.' });
        window.location.hash = "#";
      }      
    });
    //beers.bind("reset", view.render, view);
  },
  
  newBeer: function() {
    var view = new BeerShop.Views.BeerEdit({ model: new BeerShop.Models.Beer() });
    $('#app').html(view.render().el);
  },
  
  edit: function(id) {
    var beer = new BeerShop.Models.Beer({ id: id });
    beer.fetch({
      success: function(model, data) {
        var view = new BeerShop.Views.BeerEdit({ model: model });  
        $('#app').html(view.render().el);
      },
      error: function() {
        new Error({ message: 'Could not load that beer.' });
        window.location.hash = "#";
      }      
    });
  }
});
