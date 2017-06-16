import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  label: DS.belongsTo('label'),
  albums: DS.hasMany('album')
});
