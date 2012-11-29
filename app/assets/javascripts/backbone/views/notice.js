BeerShop.Views.Notice = BeerShop.Views.Base.extend({
  el: '#notice',
  
  showNotice: function(msg) {
    this._showMessages("notice", [msg]);
  },
  
  showNotices: function(msgs) {
    this._showMessages("notice", msgs);
  },
  
  showError: function(msg) {
    this._showMessages("error", [msg]);
  },
  
  showErrors: function(msgs) {
    this._showMessages("error", msgs);
  },
  
  clear: function() {
    this._showMessages("", []);
  },
  
  _showMessages: function(css, msgs) {
    this.options = {cssClass:css, messages:msgs};
    this.render();
  },

  render: function() {
    var x = this.compose('notice', this.options);
    console.log("Notice content: %o", x);
    console.log("this.$el: %o", this.$el);
    console.log("$(this.el): %o", $(this.el));
    this.$el.html(x);
    return this;
  }
});
