BeerShop.Views.Notice = Backbone.View.extend({
  el: '#notice',
  
  initialize: function() {
  },
  
  showMessage: function(msg) {
    this.options.message = msg;
    this.render();
  },
  
  render: function() {
    this.$el.html(JST['backbone/templates/notice']({ message: this.options.message }));
    return this;
  }
});
