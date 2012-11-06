BeerShop.Routers.Beers = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  
  index: function() {
    var view = new BeerShop.Views.BeersIndex({ collection: new BeerShop.Collections.Beers() });
    $('#app').html(view.render().$el);
  }
});
