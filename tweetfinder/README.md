# Streaming Twitter Data using Tweepy

## Steps
1. Authenticate using four tokens.
2. Create a live streaming listener using Tweepy.
3. Save data in two formats simultaneously:
	a. Use `data` parameter and save as `JSON`.
	b. Use `status` parameter and save as `txt`.

## Use Cases
* 'How sick is Denver?' 
	- For a given geograpic area, at what rate are people tweeting 'cough'?
* News tracking: correctly detect topic + sentiment from a block of tweets.
	- Can we predict flu epidemic in X city? (search by geolocation)
	- Is there a current housing crisis in San Francisco, comparing yoy? (search by geo and time)
		* Time series analysis
			* Severity y-o-y, m-o-m ('20% increase over last month')
			* Volume of tweets y-o-y, m-o-m
			* number of evictions y-o-y, m-o-m
		* Sentiment analysis (varies based on search: 'homeless', 'evicted' are definitely negative)
		* Last step: monthly tweet sent out saying 'evictions appear to be up in San Francisco'
		* (Later version: to work around rate limits, use seperate Twitter accounts/Oauth credentials for individual major cities)

## Techniques
* (Database: MongoDB)
* Reading data: Node file.fs, python io

## Project: Trendline
Less ambitious, more portfolio-like: "first node/express app on Heroku"

### Live Update Version
* Present embedded tweets related to the trend
* Use D3 to present the trend line
	- Hover over trendline: display a single tweet that represents the trend and hyperlink to view original tweet on Twitter

### Static Version
* If scanning historical and current tweets for trends in a city, could present trend data periodically (using Heroku scheduler, 'run once a day')
* API calls will come from frontend JavaScript
	1. Python script writes out some JSON with the 'analysis results'
	2. That JSON is dropped into the top of your `app.js` file
	3. The same `app.js` file makes API calls to D3, maybe to embed some tweets
* "Datastore" is just `var Store = {}`
* Use heroku to serve `index.html`, `index.css` and `app.js` files
* Once the first Node/Express app is 'up' on Heroku, you can put files in the `/public` folder and they'll be served verbatim with no extra logic required