
$(document).ready(function () {

  // Store the id of the element that triggers the event
  var callerID;

  // From the directory
  $("area").click(function (event) {
      callerID = event.target.id;
      console.log(callerID);
      alert(callerID);
      localStorage.setItem("storeID", callerID);
  });

  // From the store list
  $("ul").on("click", ".store", function (event){
    callerID = event.target.id;
    console.log(callerID);
    localStorage.setItem("storeID", callerID);
  });
  
});

