import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('song', params.song_id);
  },
  actions: {
    deleteSong(model) {
      this.store.findRecord('album', model.get('album.id'))
        .then(album => {
          album.get('songs').removeObject(model);
          album.save();
          model.destroyRecord();
          this.transitionTo('albums.show', album.get('id'))
        })
    }
  }
});
