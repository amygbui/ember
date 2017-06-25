import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      album: this.store.findRecord('album', params.album_id),
      artists: this.store.findAll('artist')
    })
    // return {
    //   album: this.store.findRecord('album', params.album_id),
    //   artists: this.store.findAll('artist')
    // }
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
      // this.store.findRecord('album', model.get('id'))
      //   .then(album => {
      //     if (album.get('newArtist')) {
      //       this.store.findRecord('artist', model.get('newArtist'))
      //         .then(artist => {
      //           album.set('artist', artist);
      //           artist.save();
      //         })
      //     }
      //     album.save();
      //   })
      //   .then(() => this.transitionTo('albums.show', model.get('id')));
    }
  }
});
