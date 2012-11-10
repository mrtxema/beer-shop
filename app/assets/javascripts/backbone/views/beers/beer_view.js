BeerShop.Views.BeerView = Backbone.View.extend({
  tagName: 'tr',
  
  initialize: function() {
  },
  
  render: function() {
    this.$el.html(JST['backbone/templates/beers/view']({ beer: this.model }));
    return this;
  }
});
