BeerShop.Routers.Beers = Backbone.Router.extend({
  routes: {
    "":               "index",
    "new":            "newBeer",
    "beers/:id/edit": "edit",
    "beers/:id":      "show"
  },
  
  initialize: function() {
    // init beers collection
    BeerShop.beers = new BeerShop.Collections.Beers();

    // init views
    BeerShop.Views.beersIndex = new BeerShop.Views.BeersIndex({ collection: BeerShop.beers });
    BeerShop.Views.beerEdit = new BeerShop.Views.BeerEdit();
    BeerShop.Views.beerShow = new BeerShop.Views.BeerShow();
    BeerShop.Views.notice = new BeerShop.Views.Notice();

    // fetch beers
    BeerShop.beers.fetch({
      success: function(collection, data) {
        BeerShop.Views.beersIndex.render();
      },
      error: function() {
        BeerShop.Views.notice.showError('Error loading beers.');
        this.navigate("");
      }      
    });
    
    // reset notice section
    this.bind("all",function(route, router) {
      BeerShop.Views.notice.clear();
    });    
  },
  
  index: function() {
    BeerShop.Views.beersIndex.render();
  },
  
  newBeer: function() {
    var beer = new BeerShop.Models.Beer();
    BeerShop.Views.beerEdit.renderModel(beer);
  },
  
  edit: function(id) {
    var beer = BeerShop.beers.get(id);
    BeerShop.Views.beerEdit.renderModel(beer);
  },
  
  show: function(id) {
    var beer = BeerShop.beers.get(id);
    BeerShop.Views.beerShow.renderModel(beer);
  }
});
