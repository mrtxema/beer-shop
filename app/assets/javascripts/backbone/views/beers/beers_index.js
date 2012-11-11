BeerShop.Views.BeersIndex = Backbone.View.extend({
  el: '#app',
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    var self = this;
    this.$el.html(JST['backbone/templates/beers/index']());
    this.collection.each(function(beer) {
    	new BeerShop.Views.BeerView({ model: beer });
    });
    return this;
  }
});
