import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({
      data: [{
        id: 1,
        type: 'label',
        attributes: {
          name: 'Popping Records'
        }
      }, {
        id: 2,
        type: 'label',
        attributes: {
          name: 'Rolling Records'
        }
      }, {
        id: 1,
        type: 'artist',
        attributes: {
          name: 'Who Knows',
          label_id: 2
        }
      }]
    })
  }
});
