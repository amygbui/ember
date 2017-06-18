import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateValue(value) {
      this.set('model.song.newAlbum', value)
    }
  }
});
