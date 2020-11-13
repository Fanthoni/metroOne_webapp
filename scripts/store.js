
function writeStoreData() {
  db.collection("stores").doc("SCK").set({
    username: "Sportcheck",
    description: "Its a really big store. Its a really big store. Its a really big store. Its a really big store. Its a really big store. Its a really big store.",
    rating_count: 2,
    rating_average: 3,
    store_hours: "11am - 7pm",
    

  });
  
}
writeStoreData();

$(document).ready(function () {

  // Store the id of the element that triggers the event
  var callerID;

  $("area").click(function (event) {
      callerID = event.target.id;
      console.log(callerID);
      alert(callerID);
      localStorage.setItem("storeID", callerID);
  });
});

