/*
Features
Add items by entering text and hitting "Return" or clicking "Add item" button
Check and uncheck items by clicking "Check" button
Delete: permanently remove items from the list

*/

function addItem() {
 // event delegation
     $().on("");
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

$(toggleCheckItem);
$(deleteItem);
