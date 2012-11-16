BeerShop.Views.Message = BeerShop.Views.Base.extend({
  el: '#notice',
  
  showMessage: function(msg) {
    this.options.message = msg;
    this.render();
    this.options.message = "";
  },
  
  render: function() {
    this.$el.html(this.compose(this.template, { message: this.options.message }));
    return this;
  }
});
