var BeerShop = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new BeerShop.Routers.Beers();
    Backbone.history.start();
  }
};
