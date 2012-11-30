var BeerShop = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    location.hash = '';
    new BeerShop.Routers.Beers();
    Backbone.history.start();
  }
};
