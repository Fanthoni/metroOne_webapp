// A single variable to refer to the searchbar
var searchbar = document.getElementById("searchbar");

// The text that is currently in the text box
// this value is updated live
var currentValue;


/* Updates the current value (immediately) when user
make any actions to the search field */
searchbar.oninput = function () {
  myFunction()
};

function myFunction() {
  currentValue = searchbar.value;
  console.log(currentValue);
}

/* Call this function when the user hit enter or return. */
searchbar.addEventListener("keydown", function (e) {

  //checks whether the pressed key is "Enter"
  if (e.keyCode === 13) { 
    goToStoreList(e);
  }
});

function goToStoreList(e) {
  var confirmedValue = currentValue;

  // Set confirmed value to local storage so other page can access it
  localStorage.setItem("userSearchFor", confirmedValue);

  // Checks if the local storage is updated
  console.log(localStorage.getItem("userSearchFor"));

  // Send user from this screen to store list
  window.location.replace("store-list.html");
  
}