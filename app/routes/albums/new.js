import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('artist');
  },
  actions: {
    addAlbum(model) {
      const newAlbum = this.store.createRecord('album', {
        title: this.get('controller.model.name')
      })
      this.set('controller.model.name', '')
      this.store.findRecord('artist', this.get('controller.model.artist_id'))
                      .then(artist => {
                        newAlbum.save();
                        artist.get('albums').pushObject(newAlbum);
                        artist.save();
                      })
      this.transitionTo('albums.show', newAlbum.id)
    }
  }
});
