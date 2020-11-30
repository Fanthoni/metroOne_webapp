const submit = document.querySelector("#submit");
const thankmsg = document.querySelector(".thankmsg");
const review = document.querySelector(".col-form-label");
const txtbox = document.querySelector("#message-text");
const reviewtxt = document.querySelector(".form-group");
const reviewContent = document.querySelector(".review");

function storeReview() {
    var review = document.querySelector("#message-text").value;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;


    submit.style.display = "none";
    thankmsg.style.display = "block";
    txtbox.style.display = "none";
    reviewtxt.style.display = "none";

    db.collection("review").doc().set({
            userFeedback: review,
            reviewDate: today,
            userid: localStorage.getItem("thisUserID"),
            storeid: localStorage.getItem("storeID")
        })
        .then(function () {
            console.log("Successfull!");
        })
        .catch(function (error) {
            console.error("Error", error);
        })
}

function getStoreReview(doc) {
    let reviewDate = document.createElement('span');
    let userFeedback = document.getElementsByClassName("store-review");

    reviewContent.setAttribute('data-id', doc.id);
    reviewDate.textContent = doc.data().reviewDate;
    userFeedback.textContent = doc.data().userFeedback;

    reviewContent.appendChild(reviewDate);

}

db.collection('review').get().then(function (querySnapshot) {
    
    querySnapshot.forEach(function (doc) {
        if (doc.data().storeid == localStorage.getItem("storeID")) {
            addReview(doc);
        } 
    })

});

function addReview(doc) {
    var review = $("<div class='review'></div>");
    var userName = $("<div class='name-review'></div>");
    var explain = $("<div class='desc-review' id ='store-review'></div>");

    let userid = doc.data().userid;
    $(".reviews").append(review);
    
    db.collection('users').doc(userid).get().then(function() {
        let user = doc.data().name;
        $(userName).append(user);
        $(review).append(userName);
    })

    var explanation = doc.data().userFeedback;
    $(explain).append(explanation);
    $(review).append(explain);
}