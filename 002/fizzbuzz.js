function handleFizzBuzz(n) {
  $('#number-chooser').submit(event => {
    event.preventDefault();
    let chosenNumber = $('#number-choice').val();
    for (let i = 0; i <= chosenNumber; i++) {
      $('.js-results').append('<div class="fizz-buzz-item"><span></span></div>');
      $('.fizz-buzz-item span').text(i);
    }
  })
}

$(handleFizzBuzz);
