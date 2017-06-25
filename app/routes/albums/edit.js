import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      album: this.store.findRecord('album', params.album_id),
      artists: this.store.findAll('artist')
    });
  },
  actions: {
    updateAlbum(album) {
      if (album.get('newArtist')) {
        album.get('artist').then(oldArtist => {
          this.store.findRecord('artist', album.get('newArtist'))
            .then(newArtist => {
              album.set('artist', newArtist);

              if (oldArtist) {
                oldArtist.save();
              }

              newArtist.save();
              album.save().then(() => this.transitionTo('albums.show', album.get('id')))
            })
        })
      } else {
        album.save();
      }
    }
  }
});
