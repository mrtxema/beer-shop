BeerShop.Views.BeerItemView = Backbone.View.extend({
  el: '#beer-list',
  tagName: 'tbody',
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.append(JST['backbone/templates/beers/itemview']({ beer: this.model }));
    return this;
  }
});
