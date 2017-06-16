import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addLabel() {
      const newLabel = this.store.createRecord('label', {
        name: this.get('controller.model.name')
      })
      this.set('controller.model.name', '')
      newLabel.save();
      this.transitionTo('labels.index')
    }
  }
});
