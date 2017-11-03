/*
Features
Add items by entering text and hitting "Return" or clicking "Add item" button
Check and uncheck items by clicking "Check" button
Delete: permanently remove items from the list

*/

function addItem() {
 // event delegation
 $("#js-shopping-list-form").on("submit", event => {
     console.log("submitted");
     let value = $(".js-shopping-list-entry").val();
     let emptyClone = $("ul.shopping-list > li:first").clone().val().remove();
     let newItem = emptyClone.find(".shopping-item").text(value);
     newItem.appendTo(".shopping-list");
 });
}

function toggleCheckItem() {
    $(".shopping-item-toggle").on("click", event => {
        $(event.target).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
        console.log($(event.target).closest("li"));
    });
}

function deleteItem() {
    $(".shopping-item-delete").on("click", event => {
        $(event.target).closest("li").remove();
    });
}

$(addItem);
$(toggleCheckItem);
$(deleteItem);
