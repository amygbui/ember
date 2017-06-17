import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('artist', params.artist_id);
  },
  actions: {
    deleteArtist(model) {
      this.store.findRecord('label', model.get('label.id'))
        .then(label => {
          label.get('artists').removeObject(model);
          label.save();
          model.get('albums').invoke("destroyRecord");
          model.destroyRecord();
          this.transitionTo('labels.show', label.get('id'))
        })
    }
  }
});
