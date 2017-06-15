import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('label');
  },
  actions: {
    // deleteLabel() {
    //   this.store.findRecord('label', label.id)
    //     .then(label => label.destroyRecord())
    // }
  }
});
