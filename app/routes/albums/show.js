import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('album', params.album_id)
  },
  actions: {
    deleteAlbum(model) {
      this.store.findRecord('artist', model.get('artist.id'))
        .then(artist => {
          artist.get('albums').removeObject(model);
          artist.save();
          model.get('songs').invoke('destroyRecord');
          model.destroyRecord();
          this.transitionTo('artists.show', artist.get('id'))
        })
    }
  }
});
