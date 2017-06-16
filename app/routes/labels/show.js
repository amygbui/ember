import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('label', params.label_id);
  },
  actions: {
    deleteLabel(model) {
      model.destroyRecord()
          .then(() =>(this.transitionTo('labels.index')))
    }
  }
});
