// REPL at https://repl.it/Icy2/1997
function handleIconClicks() {
    $('.thumbnail').on('click', event => {
        const targetThumbnail = $(event.currentTarget);
        const otherThumbnails = $('thumbnail').not(targetThumbnail);
        $('.hero').empty();
        $(targetThumbnail).clone().appendTo('.hero').removeClass('thumbnail');
        otherThumbnails.removeClass('hero')
        otherThumbnails.addClass('thumbnail');
    })
}

$(handleIconClicks);
