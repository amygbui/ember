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
    }
  }
});
