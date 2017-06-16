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
});

export default Router;
