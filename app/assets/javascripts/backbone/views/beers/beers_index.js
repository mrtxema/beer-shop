BeerShop.Views.BeersIndex = BeerShop.Views.Base.extend({
  events: {
    "click a.delete": "destroy"
  },
  
  destroy: function(ev) {
    var elm = $(ev.target).closest('.delete');
    var msg = elm.attr('bb-confirm');
    if (!msg || confirm(msg)) {
      var self = this;
      var id = elm.attr('bb-id');
      var beer = BeerShop.beers.get(id);
      beer.destroy({
        success: function(model, data) {
          BeerShop.Views.notice.showNotice('Beer successfully deleted');
          self.render();
          self.delegateEvents();
          Backbone.history.navigate('');
        },
        error: function() {
          BeerShop.Views.notice.showError('Could not delete that beer.');
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
