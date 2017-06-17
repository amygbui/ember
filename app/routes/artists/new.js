import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('artist');
  },
  actions: {
    addArtist() {
      const newArtist = this.store.createRecord('artist', {
        name: this.get('controller.model.name')
      })

      this.set('controller.model.name', '')
      this.store.findRecord('label', 2)
                      .then(label => {
                        newArtist.save();
                        label.get('artists').pushObject(newArtist);
                        label.save();
                      })
      this.transitionTo('artists.show', newArtist.id)
    }
  }
});
