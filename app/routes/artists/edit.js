import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      artist: this.store.findRecord('artist', params.artist_id),
      labels: this.store.findAll('label')
    })
    // return {
    //   labels: this.store.findAll('label'),
    //   artist: this.store.findRecord('artist', params.artist_id)
    // };
  },
  actions: {
    updateArtist(artist) {
      if (artist.get('newLabel')) {
        artist.get('label').then(oldLabel => {
          this.store.findRecord('label', artist.get('newLabel'))
            .then(newLabel => {
              artist.set('label', newLabel);

              if (oldLabel) {
                oldLabel.save();
              }

              newLabel.save();
              artist.save().then(() => this.transitionTo('artists.show', artist.get('id')))
            })
        })
      } else {
        artist.save();
      }
    }
  }
});
