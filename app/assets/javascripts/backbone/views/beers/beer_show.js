BeerShop.Views.BeerShow = BeerShop.Views.Base.extend({
  render: function() {
    this.setTitle("Beer details");
    this.$el.html(this.compose('beers/show', { beer: this.model }));
    return this;
  }
});
