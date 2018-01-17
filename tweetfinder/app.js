/*
Uses 'twitter' package
*/

'use strict';

const Twitter = require('twitter');
const config = require('./config.js');
const fs = require('fs');
const cities = require('./cities.js');

var client = new Twitter(config);
var params = {
	q: '%23donaldtrump',
	geocode: '40.7127837,-74.0059413,10mi', // New York City
	count: 5,
	result_type: 'recent',
	lang: 'en',
	truncated: false,
	tweet_mode: 'extended',
	retweeted_status:
	{
		truncated: false
	}
}

function getTweets() {
	client.get('search/tweets', params, (err, data) => {
		if(err) throw err;
		var tweets = [];
		data.statuses.forEach(entry => {
			tweets.push(entry.full_text); // full_text in retweets are always truncated
		});
		var uniqueTweets = tweets.filter(onlyUnique);
		uniqueTweets.forEach(entry => {
			fs.appendFile('tweets.txt', entry + '\n', err => {
				if (err) throw err;
			});
		});
	});
}
// Discards duplicate tweets
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var currentCityIndex = 0;
function getCityData() {
	setTimeout(function() {
		let lat = cities[currentCityIndex].latitude;
		let lon = cities[currentCityIndex].longitude;
		params.geocode = `${lat},${lon},10mi`;
		fs.appendFile('tweets.txt', `${cities[currentCityIndex].city}`+ '\n', err => {
			if (err) throw err;
		});
		getTweets(); // Collect data for current city
		currentCityIndex++;
		if(currentCityIndex < 5) {
			getCityData();
		}
	}, 10000);
}
getCityData();
/*
var currIndex = 0;
function timeConsoleLog() {
    setTimeout(function() {
        let la = cities[currIndex].latitude;
        let lo = cities[currIndex].longitude;
        let currCity = cities[currIndex].city;
        obj.city = `${currCity}`;
        obj.geocode = `${la},${lo}`;
        printCity();
        currIndex++;
        if(currIndex < 3) {
            timeConsoleLog();
        }
    }, 3000);
        
}
timeConsoleLog();
*/