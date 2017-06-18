import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      album: this.store.findRecord('album', params.album_id),
      artists: this.store.findAll('artist')
    }
  },
  actions: {
    updateAlbum(model) {
      this.store.findRecord('album', model.get('id'))
        .then(album => {
          if (album.get('newArtist')) {
            this.store.findRecord('artist', album.get('newArtist'))
              .then(artist => {
                album.set('artist', artist);
                artist.save();
              })
          }
          album.save();
        })
        .then(() => this.transitionTo('albums.show', model.get('id')))
    }
  }
});
