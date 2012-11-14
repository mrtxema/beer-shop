BeerShop.Views.Error = Backbone.View.extend({
  el: '#notice',
  
  initialize: function() {
  },

  showMessage: function(msg) {
    this.options.message = msg;
    this.render();
  },
  
  render: function() {
    this.$el.html(JST['backbone/templates/error']({ message: this.options.message }));
    return this;
  }
});
