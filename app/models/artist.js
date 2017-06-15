import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  albums: DS.hasMany('albums'),
  label: DS.belongsTo('label')
});
