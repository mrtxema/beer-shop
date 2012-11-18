BeerShop.Views.BeerShow = BeerShop.Views.Base.extend({
  render: function() {
    this.$el.html(this.compose('beers/show', { beer: this.model }));
    return this;
  }
});
