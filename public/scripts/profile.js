/* Only for DOM manipulation on profile.html. */

// Stores the current UID
var userID = localStorage.getItem("thisUserID");

/**
 * A function to modify the profile page based on the currently
 * loggend in user.
 */
function modifyProfile() {
    db.collection("users").doc(userID)
        .onSnapshot(function (snap) {
            $("#profileName").html("<p>" + snap.data().name + "</p>");
            $("#profileEmail").html("<p>" + snap.data().email + "</p>");
        })
}
modifyProfile();