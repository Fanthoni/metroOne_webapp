$(document).ready(function () {
    // The current store ID
    var thisStoreID = localStorage.getItem("storeID");
    //console.log(thisStoreID);

    var thisUserID = localStorage.getItem("thisUserID");
    //console.log(thisUserID);

    // 
    refreshLikeButton(thisStoreID, thisUserID);

    var thisUserFavStore = [];

    db.collection("users").doc(thisUserID).get().then(function (doc) {

        // Add listener to the heart button
        $("#btn-favourite").on("click", function (event) {
            thisUserFavStore = doc.data().favStore;
            console.log(thisUserFavStore);

            // If current store is liked
            if (thisUserFavStore.includes(thisStoreID)){
                // remove this store id from from the list
                for (var i = 0; i < thisUserFavStore.length; i++){
                    if (thisUserFavStore[i] == thisStoreID){
                        thisUserFavStore.splice(i, 1);
                    }
                }
                // update to the database
                updateFavStore(thisUserID, thisUserFavStore);
                // change filled heart to regular heart
                $(this).attr("src", "./images/heart.png");
            } else{
                // If the current store is NOT liked
                // add this storeID to the user list
                thisUserFavStore.push(thisStoreID);
                updateFavStore(thisUserID, thisUserFavStore);
                // change empty heart to filled heart
                $(this).attr("src", "./images/heart-liked.png");
            }
        })

        // Updates the favourite store list to the database
        function updateFavStore(thisUserID, thisUserFavStore){
            db.collection("users").doc(thisUserID).update({
                favStore: thisUserFavStore
            })
        }
    })

    // If this store is like, change the hear button to red
    function refreshLikeButton(thisStoreID, thisUserID){
        db.collection("users").doc(thisUserID).get().then(function(doc){
            let thisUserFavStore = doc.data().favStore;

            if (thisUserFavStore.includes(thisStoreID)){
                $("#btn-favourite").attr("src", "./images/heart-liked.png");
            }
        })
    }
});