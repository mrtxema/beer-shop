BeerShop.Views.BeersIndex = Backbone.View.extend({
  initialize: function() {
  },
  
  render: function() {
    var self = this;
    this.$el.html(JST['backbone/templates/beers/index']());
    this.collection.each(function(beer) {
    	var beerView = new BeerShop.Views.BeerView({ model: beer });
    	self.$('#beer-list').append(beerView.render().el);
    });
    return this;
  }
});
