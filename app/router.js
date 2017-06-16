import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('labels', function() {
    this.route('show', { path: '/:label_id' });
    this.route('new');
    this.route('edit', { path: 'edit/:label_id' });
  });

  this.route('artists', function() {
    this.route('show', { path: '/:artist_id' });
  });

  this.route('albums', function() {
    this.route('show', { path: '/:album_id' });
  });

  this.route('songs', function() {
    this.route('show', { path: '/:song_id' });
  });
});

export default Router;
