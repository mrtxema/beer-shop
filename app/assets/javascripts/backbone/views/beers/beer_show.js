BeerShop.Views.BeerShow = BeerShop.Views.Base.extend({
  el: '#app',
  
  render: function() {
    this.$el.html(this.compose('beers/show', { beer: this.model }));
    return this;
  }
});
