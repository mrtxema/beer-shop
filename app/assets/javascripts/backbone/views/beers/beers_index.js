BeerShop.Views.BeersIndex = BeerShop.Views.Base.extend({
  el: '#app',

  events: {
    "click a.delete": "destroy"
  },
  
  destroy: function(ev) {
    var msg = ev.target.attributes['bb-confirm'];
    if (!msg || confirm(msg.value)) {
      var self = this;
      var id = ev.target.attributes['bb-id'];
      var beer = BeerShop.beers.get(id.value);      
      beer.destroy({
        success: function(model, data) {
          BeerShop.Views.notice.showMessage('Beer successfully deleted');
          self.render();
          self.delegateEvents();
          Backbone.history.navigate('');
        },
        error: function() {
          BeerShop.Views.error.showMessage('Could not delete that beer.');
        }
      });
    }
    return false;
  },  
  
  render: function() {
    var self = this;
    this.$el.html(this.compose('beers/index'));
    this.collection.each(function(beer) {
    	new BeerShop.Views.BeerItemView({ model: beer });
    });
    return this;
  }
});
