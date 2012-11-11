BeerShop.Views.Notice = Backbone.View.extend({
  el: '#notice',
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.append(JST['backbone/templates/notice']({ message: this.options.message }));
    return this;
  }
});
