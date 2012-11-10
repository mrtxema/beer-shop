BeerShop.Views.BeerEdit = Backbone.View.extend({
  events: {
    "submit form": "save"
  },
  
  initialize: function() {
  },
  
  save: function() {
    var self = this;
    this.model.save({
      brewer: this.$('[name=brewer]').val(),
      name:   this.$('[name=name]').val(),
      style:  this.$('[name=style]').val(),
      abv:    this.$('[name=abv]').val(),
      ibu:    this.$('[name=ibu]').val()
    }, {
      success: function(model, data) {
        //new BeerShop.Views.Notice({ message: 'Successfully saved' });
        self.model = model;
        self.render();
        self.delegateEvents();
        //Backbone.history.saveLocation('beers/' + model.id);
      },
      error: function() {
        new BeerShop.Views.Error();
      }
    });
    return false;
  },
  
  render: function() {
    this.$el.html(JST['backbone/templates/beers/edit']({ beer: this.model }));
    return this;
  }
});
