function addItem() {
 // event delegation
 $(".shopping-list-form").find(".submit").on("submit", event => {
    console.log("submitted");
    let value = $(".js-shopping-list-entry").val();
    let emptyClone = $("ul.shopping-list > li:first").clone().val().remove();
    let newItem = emptyClone.find(".shopping-item").text(value);
    newItem.appendTo(".shopping-list");
 });
}

$(addItem);
