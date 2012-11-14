BeerShop.Views.BeerShow = Backbone.View.extend({
  el: '#app',
  
  initialize: function() {
  },
  
  render: function() {
    this.$el.html(JST['backbone/templates/beers/show']({ beer: this.model }));
    return this;
  }
});
