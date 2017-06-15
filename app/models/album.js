import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),

  songs: DS.hasMany('song'),
  artist: DS.belongsTo('artist')
});
