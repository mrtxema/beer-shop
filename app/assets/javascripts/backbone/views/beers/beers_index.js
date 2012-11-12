BeerShop.Views.BeersIndex = Backbone.View.extend({
  el: '#app',

  events: {
    "click a.delete": "destroy"
  },
  
  initialize: function() {
    this.render();
  },
  
  destroy: function(ev) {
    var msg = ev.target.attributes['bb-confirm'];
    if (!msg || confirm(msg.value)) {
      var self = this;
      var id = ev.target.attributes['bb-id'];
      var beer = BeerShop.beers.get(id.value);      
      beer.destroy({
        success: function(model, data) {
          new BeerShop.Views.Notice({ message: 'Beer successfully deleted' });
          self.render();
          self.delegateEvents();
          Backbone.history.navigate('');
        },
        error: function() {
          new BeerShop.Views.Error({ message: 'Could not delete that beer.' });
        }
      });
    }
    return false;
  },  
  
  render: function() {
    var self = this;
    this.$el.html(JST['backbone/templates/beers/index']());
    this.collection.each(function(beer) {
    	new BeerShop.Views.BeerItemView({ model: beer });
    });
    return this;
  }
});
