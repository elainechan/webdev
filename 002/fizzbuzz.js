function handleFizzBuzz() {
  $('#number-chooser').submit(event => {
    event.preventDefault();
    $('.js-results').empty();
    let chosenNumber = $('#number-choice').val();
    let outcomes = fizzBuzz(chosenNumber);
    for (let i = 0; i < outcomes.length; i++) {
      $('.js-results').append(`<div class="fizz-buzz-item"><span>${outcomes[i]}</span></div>`);
      $('div:contains('fizz')').addClass('fizz');
    }
  });
}

function fizzBuzz(countTo) {
  let a = [];
  for (let i = 1; i <= countTo; i++) {
    if (i % 15 === 0) {
      a.push("fizzbuzz");
    } else if (i % 3 === 0) {
      a.push("fizz");
    } else if (i % 5 === 0) {
      a.push("buzz");
    } else {
      a.push(i);
    }
  }
  return a;
}

$(handleFizzBuzz);
