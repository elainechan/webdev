const TWITTER_SEARCH_URL = 'https://api.twitter.com/1.1/search/tweets.json';

function getDataFromApi(searchTerm, callback) {
  const query = {
	part: 'snippet',
	key: 'TnCT76CwIFFG8RFiWNOJz8FQF', // TODO: remove before git push
	q: `${searchTerm} in:name`,
  };
  $.getJSON(TWITTER_SEARCH_URL, query, callback);
}

function renderResult(result) {
  return `
	<div>
	  <a href="https://www.twitter.com/${result.id.videoId}" target="_blank"><img src="${result.snippet.thumbnails.medium.url}" alt="YouTube video snippet"></a>
      <h2>
      <a class="js-result-name" href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank">${result.snippet.title}</a> by <a class="js-user-name" href="https://www.youtube.com/channel/${result.snippet.channelId}" target="_blank">${result.snippet.channelTitle}</a></h2>
      <p>Publishing date: <span class="js-watchers-count">${result.snippet.publishedAt}</span></p>
      <p>Description: <span class="js-issues-count">${result.snippet.description}</span></p>
    </div>
  `;
}

function displayYouTubeSearchData(data) {
  const results = data.items.map((item, index) => renderResult(item)); 
  $('.js-search-results').html(results);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayYouTubeSearchData);
  });
}

$(watchSubmit);