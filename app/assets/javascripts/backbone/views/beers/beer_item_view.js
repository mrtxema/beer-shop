BeerShop.Views.BeerItemView = BeerShop.Views.Base.extend({
  el: '#beer-list',
  tagName: 'tbody',
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.append(this.compose('beers/itemview', { beer: this.model }));
    return this;
  }
});
