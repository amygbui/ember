import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  artists: DS.hasMany('artist')
});
