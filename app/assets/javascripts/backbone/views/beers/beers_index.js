BeerShop.Views.BeersIndex = Backbone.View.extend({
  initialize: function() {
       this.collection.fetch();
       this.collection.bind("reset", this.render, this);
  },
  
  render: function() {
    console.log(this.collection.length);
    this.$el.html(JST['backbone/templates/beers/index']({ beers: this.collection }));
    return this;
  }
});
