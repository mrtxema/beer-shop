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
    BeerShop.Views.error = new BeerShop.Views.Error();

    // fetch beers
    BeerShop.beers.fetch({
      success: function(collection, data) {
        BeerShop.Views.beersIndex.render();
      },
      error: function() {
        BeerShop.Views.error.showMessage('Error loading beers.');
        this.navigate("");
      }      
    });
  },
  
  index: function() {
    BeerShop.Views.notice.showMessage('');
    BeerShop.Views.beersIndex.render();
  },
  
  newBeer: function() {
    var beer = new BeerShop.Models.Beer();
    BeerShop.Views.beerEdit.model = beer;
    BeerShop.Views.beerEdit.render();
  },
  
  edit: function(id) {
    var beer = BeerShop.beers.get(id);
    BeerShop.Views.beerEdit.model = beer;
    BeerShop.Views.beerEdit.render();
  },
  
  show: function(id) {
    var beer = BeerShop.beers.get(id);
    BeerShop.Views.beerShow.model = beer;
    BeerShop.Views.beerShow.render();
  }
});
