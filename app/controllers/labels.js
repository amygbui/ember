import Ember from 'ember';

export default Ember.Controller.extend({
  // validators: [{ field: 'name', validator: 'required', message: "Name can't be blank"}],
  actions: {
    addLabel(data) {
      this.store.createRecord('label', {
        name: this.get('model.name')
      })
      this.set('model.name', '')
    // },
  // //   deleteLabel() {
  // //     this.store.findRecord('label', )
  // //       .then(label => label.destroyRecord())
    }
  }
});
