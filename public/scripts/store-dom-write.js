callerID = localStorage.getItem("storeID");
//alert(callerID);

// Modify the store content
function readQuote() {
    db.collection("stores").doc(callerID)
        .onSnapshot(function (snap) {
            document.getElementById("store-name").innerText = snap.data().name;
            document.getElementById("store-desc").innerText = snap.data().description;
            document.getElementById("store-image").src = snap.data().image;
        })
}

// Modify the bell to back icon if the user previously clicked on store list or favorite list
function modifyBellIcon() {
    let data = JSON.parse(localStorage.getItem("backButton"));
    if (data['toAppear'] == 'true') {
        $('#bell').remove();
        let backButton = $("<div ></div>");
        $('header').prepend(backButton);

        let toDirect = data['toDirect'];
        let backButtonAnchor = $("<a></a>").attr('href', toDirect);
        $(backButton).append(backButtonAnchor);

        $(backButtonAnchor).append("<img id='back-btn' src='./images/back.png'>");
    }
}

readQuote();
modifyBellIcon();