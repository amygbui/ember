import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({
      data: [
        {
          id: 1,
          type: 'label',
          attributes: { name: 'Popping Records' },
          relationships: {
            artists: {
              data: [
                { id: 1, type: 'artist' },
                { id: 2, type: 'artist' }
              ]
            }
          }
        }, {
          id: 2,
          type: 'label',
          attributes: { name: 'Rolling Records' }
        }, {
          id: 1,
          type: 'artist',
          attributes: { name: 'Who Knows', label_id: 1 },
          relationships: {
            albums: {
              data: [{ id: 1, type: 'album' }]
            }
          }
        }, {
          id: 2,
          type: 'artist',
          attributes: { name: 'Revolution Revivers' }
        }, {
          id: 1,
          type: 'album',
          attributes: { title: 'What is Life', artist_id: 1 },
          relationships: {
            songs: {
              data: [{ id: 1, type: 'song' }]
            }
          }
        }, {
          id: 1,
          type: 'song',
          attributes: { title: 'Go Go Go', album_id: 1 }
        }
      ]
    })
  }
});
