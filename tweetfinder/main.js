/*
Uses 'twit' package
*/

const twit = require('twit');
const config1 = require('./config1.js');
const fs = require('fs');

var T = new twit(config1);

var params = {
	q: '%23donaldtrump',
	geocode: '40.7127837,-74.0059413,10mi',
	count: 2,
	result_type: 'recent',
	lang: 'en',
	retweeted: false,
	truncated: false,
	retweeted_status:
	{
		truncated: false
	}
}

T.get('search/tweets', params, (err, data) => {
  if(err) throw err;	
	var tweets = [];
	console.log(data.statuses[0]);
});