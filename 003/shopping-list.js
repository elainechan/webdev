/*
Features
Add items by entering text and hitting "Return" or clicking "Add item" button
Check and uncheck items by clicking "Check" button
Delete: permanently remove items from the list

*/

function addItem() {
 // event delegation
 $("#js-shopping-list-form").submit(event => {
    event.preventDefault();
/*
    let value = $(".js-shopping-list-entry").val();
    let sl = $("ul.shopping-list");
    let i = sl.find("li:first");
    let newItem = i.clone(true);
    sl.append(newItem);
    newItem.find(".shopping-item").text(value);
*/
    $("ul.shopping-list")
        .find("li:first")
        .clone(true)
        .appendTo("ul.shopping-list")
        .find(".shopping-item")
        .text($(".js-shopping-list-entry").val());
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
