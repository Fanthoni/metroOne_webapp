$(document).ready(function () {
    var userID = localStorage.getItem("thisUserID");
    db.collection("users").doc(userID).get().then(function (doc) {
        var thisUserFavStore = doc.data().favStore;
        // Show to the DOM based on the user favorite store
        printThis(thisUserFavStore);
    })


    function printThis(thisUserFavStore) {
        db.collection("stores").get().then(function (querySnapShot) {
            querySnapShot.forEach(function (doc) {
                if (thisUserFavStore.includes(doc.id)) {
                    addStore(doc);
                }
            })
        })
    }

    /* Add a store to the store-list page. */
    function addStore(doc) {
        var thisStore = $("<li></li>");
        $("#favorite-list ul").append(thisStore);

        var thisStoreLink = $("<a class='store' href='store.html'></a>");
        $(thisStore).append(thisStoreLink);
        $(thisStoreLink).attr('id', doc.id);
        $(thisStoreLink).append(doc.data().name);
    }
})