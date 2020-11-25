/* For store-list.html only */

var toSearch = localStorage.getItem("userSearchFor");
toSearch = toSearch.toLowerCase();

// If to do is NOT null. meaning the user search store from searchbar
if (toSearch !== "null") {
    // Empty out all the list in the DOM
    $("#storeList ul").empty();

    // An array to store the id of stores that matches based user search
    var listOfStoreID = [];

    /* Iterate through the store in the databse
     and compare each store's name value to user's input. */
    db.collection("stores").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // if mathces at the store id into the array
            if (doc.data().name.toLowerCase().includes(toSearch)) {
                listOfStoreID.push(doc.id);
                addStore(doc);
            }
        });

        // If there is nothing in the list, there is no store found.
        if (listOfStoreID.length === 0) {
            $("#storeList").append("No Store Found");
        }
    });

    /* The user did not search from the search bar and all store should be shown
        in the list.*/
} else {
    db.collection("stores").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            addStore(doc);
        })
    });
}

/* Add a store to the store-list page. */
function addStore(doc) {
    var thisStore = $("<li></li>");
    $("#storeList ul").append(thisStore);

    var thisStoreLink = $("<a class='store' href='store.html'></a>");
    $(thisStore).append(thisStoreLink);
    $(thisStoreLink).attr('id', doc.id);
    $(thisStoreLink).append(doc.data().name);
}