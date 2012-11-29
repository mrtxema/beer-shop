BeerShop.Views.BeerEdit = BeerShop.Views.Base.extend({
  events: {
    "submit form": "save"
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
        BeerShop.Views.notice.showNotice('Beer successfully saved');
        self.model = model;
        self.render();
        self.delegateEvents();
        Backbone.history.navigate('beers/' + model.id + '/edit');
      },
      error: function(model, data) {
        if (model.isNew()) {
          BeerShop.beers.remove(model);
        }
        var errors = _.map($.parseJSON(data.responseText), function(msg, fld) { return fld + ": " + msg; });
        var messages = _.union(["Could not save that beer."], errors);
        BeerShop.Views.notice.showErrors(messages);        
      }
    });
    return false;
  },
  
  render: function() {
    this.setTitle("Editing beer");
    this.$el.html(this.compose('beers/edit', { beer: this.model }));
    return this;
  }
});
