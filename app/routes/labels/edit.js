import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('label', params.label_id);
  },
  actions: {
    updateLabel(model) {
      this.store.findRecord('label', model.id)
        .then(label => {
          label.set('name', this.get('controller.model.name'));
          label.save();
        })
        .then(this.transitionTo('labels.show', model.id))
    }
  }
});
