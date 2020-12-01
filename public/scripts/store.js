$(document).ready(function () {

  // Store the id of the element that triggers the event
  var callerID;

  // From the directory
  $("area").click(function (event) {
    callerID = event.target.id;
    console.log(callerID);
    localStorage.setItem("storeID", callerID);

    localStorage.setItem("backButton", JSON.stringify({
      toAppear: 'false',
      toDirect: ''
    }))
  });

  // From the store list
  $("ul").on("click", ".store", function (event) {
    callerID = event.target.id;
    console.log(callerID);
    localStorage.setItem("storeID", callerID);

    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page);

    // Backbutton should appear at the store page if the user press store link from the store list
    // or favorite list
    localStorage.setItem("backButton", JSON.stringify({
      toAppear: 'true',
      toDirect: page
    }))

    var temp = JSON.parse(localStorage.getItem("backButton"));
    alert(temp['toDirect']);
  });

});