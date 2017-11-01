/*
user selects a thumbnail using the mouse or keyboard
image should be displayed in the full size image container at the top 
Updating the image should also update its alt attribute. 
Tab to navigate thumbnails
Enter key to select
*/
/*
event.currentTarget
.click()
event.which
.keydown()
.toggleClass()
*/

function handleIconClicks() {
    $('.thumbnail').on('click', event => {
        const targetThumbnail = $(event.currentTarget);
        const otherThumbnails = $('.thumbnail').not(targetThumbnail);
        $('.hero').html(targetThumbnail);
        currentTarget.toggleClass('hero');
    })
}

$(handleIconClicks);
