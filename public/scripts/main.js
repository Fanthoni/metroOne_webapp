/* Upon app startup */

// Store the currently signed-in user to local storage.
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User logged in already or has just logged in.
        // Assign the currently signed in userID in local storage
        localStorage.setItem("thisUserID", user.uid);
        console.log(localStorage.getItem("thisUserID"));

    } else {
        // User not logged in or has just logged out.
        // User should not have any access to any MetrOne services if they are
        // not logged in.
    }
});