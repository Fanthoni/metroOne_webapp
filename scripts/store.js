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