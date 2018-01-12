// const http = require('http');
const Twitter = require('twitter');
const config = require('./config.js');
const fs = require('fs');

var client = new Twitter(config);
var params = {
	q: '#realestate',
	count: 20,
	result_type: 'recent',
	lang: 'en'
}

var stream = client.stream('statuses/filter', {track: '#realestate'});
stream.on('data', (event) => {
	fs.appendFile('tweets.txt', event.text + '\n', (error) =>{
		if(error) throw error;	
	});
});
stream.on('error', (error) => {
	throw error;
});