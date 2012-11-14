BeerShop.Views.BeerEdit = Backbone.View.extend({
  el: '#app',
  
  events: {
    "submit form": "save"
  },
   
  initialize: function() {
  },
  
  save: function() {
    if (this.model.isNew()) {
      BeerShop.beers.add(this.model);
    }
    var self = this;
    this.model.save({
      brewer: this.$('[name=brewer]').val(),
      name:   this.$('[name=name]').val(),
      style:  this.$('[name=style]').val(),
      abv:    this.$('[name=abv]').val(),
      ibu:    this.$('[name=ibu]').val()
    }, {
      success: function(model, data) {
        BeerShop.Views.notice.showMessage('Beer successfully saved');
        self.model = model;
        self.render();
        self.delegateEvents();
        Backbone.history.navigate('beers/' + model.id + '/edit');
      },
      error: function() {
        BeerShop.Views.error.showMessage('Could not save that beer.');
      }
    });
    return false;
  },
  
  render: function() {
    this.$el.html(JST['backbone/templates/beers/edit']({ beer: this.model }));
    return this;
  }
});
