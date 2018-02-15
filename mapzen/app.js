const request = require('request');

request({
  url: 'https://api.foursquare.com/v2/venues/explore',
  method: 'GET',
  qs: {
    client_id: '3A5ZLXDO3E1V4RBQLRRDU1A3WBGFVZJWHTGXG3TS45TBAL5E',
    client_secret: 'JCG2QMIQMPGK5ZN3WCAAZT3WFH3PT0LSYE5ZVRT0A3JEQZAS',
    ll: '40.7243,-74.0018',
    query: 'coffee',
    v: '20170801',
    limit: 1
  }
}, function(err, res, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});