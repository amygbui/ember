import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addArtist() {
      const newArtist = this.store.createRecord('artist', {
        name: this.get('controller.model.name')
      })
      debugger
      this.set('controller.model.name', '')
      newArtist.save();
      this.transitionTo('artist.show', newArtist.id)
    }
  }
});
