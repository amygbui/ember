import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      labels: this.store.findAll('label'),
      artist: this.store.findRecord('artist', params.artist_id)
    };
  },
  actions: {
    updateArtist(model) {
      this.store.findRecord('artist', model.get('id'))
        .then(artist => {
          artist.save();
          if (artist.get('newLabel')) {
            this.store.findRecord('label', artist.get('newLabel'))
            .then(label => {
              // label.get('artists').pushObject(artist);
              artist.set('label', label);
              label.save();
            })
          }
        })
        .then(() => this.transitionTo('artists.show', model.get('id')));
    }
  }
});
