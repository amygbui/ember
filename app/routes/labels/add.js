import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addLabel() {
      this.store.createRecord('label', {
        name: this.get('controller.model.name')
      })
      this.set('controller.model.name', '')
      this.transitionTo('labels.index')
    }
  }
});
