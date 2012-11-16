BeerShop.Views.Base = Backbone.View.extend({
  compose: function(tpl, params) {
    var templateFunc = JST['backbone/templates/' + tpl];
    return templateFunc(params);
  },
  
  renderModel: function(m) {
    this.model = m;
    return this.render();
  }
});