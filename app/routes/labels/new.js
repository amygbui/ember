import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('label');
  },
  actions: {
    addLabel() {
      const newLabel = this.store.createRecord('label', {
        name: this.get('controller.model.name'),
        id: 2
      })
      this.set('controller.model.name', '')
      newLabel.save();
      this.transitionTo('labels.index')
    }
  }
});
