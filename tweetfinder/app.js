/*
Uses 'twitter' package
*/

'use strict';

const Twitter = require('twitter');
const config = require('./config.js');
const fs = require('fs');

var client = new Twitter(config);
var params = {
	q: '%23donaldtrump',
	geocode: '40.7127837,-74.0059413,10mi', // New York City
	count: 10,
	result_type: 'recent',
	lang: 'en',
	truncated: false,
	tweet_mode: 'extended',
	retweeted_status:
	{
		truncated: false
	}
}

client.get('search/tweets', params, (err, data) => {
	if(err) throw err;
	console.log(data);
	var tweets = [];
	var uniqueTweets;
	data.statuses.forEach(entry => {
		tweets.push(entry.full_text);
		//console.log(entry.full_text);
	});
	uniqueTweets = tweets.filter(onlyUnique);
	uniqueTweets.forEach(entry => {
		//console.log(entry + '\n');
		fs.appendFile('tweets.txt', entry + '\n', err => {
			if (err) throw err;
		});
	});
	// console.log(`ORIGINAL TWEETS:` + '\n' + tweets);
	// console.log(`UNIQUE TWEETS:` + '\n' + uniqueTweets);
});

// Discards duplicate tweets
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}