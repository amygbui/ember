import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      song: this.store.findRecord('song', params.song_id),
      albums: this.store.findAll('album')
    })
  },
  actions: {
    updateSong(song) {
      if (song.get('newAlbum')) {
        song.get('album').then(oldAlbum => {
          this.store.findRecord('album', song.get('newAlbum'))
            .then(newAlbum => {
              song.set('album', newAlbum);
              
              if (oldAlbum) {
                oldAlbum.save();
              }

              newAlbum.save();
              song.save().then(() => this.transitionTo('songs.show', song.get('id')))
            })
        })
      } else {
        song.save();
      }

      // this.store.findRecord('song', model.get('id'))
      //   .then(song => {
      //     if (song.get('newAlbum')) {
      //       this.store.findRecord('album', song.get('newAlbum'))
      //         .then(album => {
      //           song.set('album', album);
      //           album.save();
      //         })
      //     }
      //     song.save();
      //   })
      //   .then(() => this.transitionTo('songs.show', model.get('id')));
    }
  }
});
