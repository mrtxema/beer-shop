BeerShop.Views.Error = Backbone.View.extend({
  el: '#notice',
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.append(JST['backbone/templates/error']({ message: this.options.message }));
    return this;
  }
});
