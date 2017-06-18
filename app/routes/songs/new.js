import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('album');
  },
  actions: {
    addSong(model) {
      const newSong = this.store.createRecord('song', {
        title: this.get('controller.model.name')
      })
      this.set('controller.model.name', '');
      this.store.findRecord('album', this.get('controller.model.album_id'))
        .then(album => {
          newSong.save();
          album.get('songs').pushObject(newSong);
          album.save();
        })
      this.transitionTo('songs.show', newSong.id);
    }
  }
});
