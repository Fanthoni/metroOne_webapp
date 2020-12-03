// Constants for DOM
const submit = document.querySelector("#submit");
const thankmsg = document.querySelector(".thankmsg");
const review = document.querySelector(".col-form-label");
const txtbox = document.querySelector("#message-text");
const reviewtxt = document.querySelector(".form-group");
const reviewContent = document.querySelector(".review");

// Function called when the user write a review
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

        db.collection("users")

}


// Community DOM manipulation
function getStoreReview(doc) {
    let li = document.createElement('li');
    let userid = document.createElement('span');
    let reviewDate = document.createElement('span');
    let userFeedback = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    userid.textContent = doc.data().userid;
    reviewDate.textContent = doc.data().reviewDate;
    userFeedback.textContent = doc.data().userFeedback;

    li.appendChild(userid);
    li.appendChild(reviewDate);
    li.appendChild(userFeedback);

    reviewContent.appendChild(li);

}

// Check if there is any comments about this store
db.collection('review').get().then(function (snapshot) {
    let hasReview = false;
    
    snapshot.forEach(function (doc) {
        // If there is a review about this store
        if (doc.data().storeid == localStorage.getItem("storeID")) {
            addReview(doc);
            hasReview = true;
        }
    })

    // If there is no review about this store.
    if (!hasReview) {
        $(".reviews").append("This store does not have any review");
    }
});

// DOM manipulation of this store
function addReview(doc) {
    var review = $("<div class='review'></div>");
    var userName = $("<div class='name-review'></div>");
    var explain = $("<div class='desc-review' id ='store-review'></div>");
    let reviewDate = $("<div class='review-date'></div>");

    

    let userid = doc.data().userid;
    $(".reviews").append(review);

    db.collection('users').doc(userid).get().then(function (doc) {
        let user = doc.data().name;
        $(userName).append(user);
        $(reviewDate).prepend(userName);
        $(review).append(reviewDate);
    })

    var explanation = doc.data().userFeedback;
    $(explain).append(explanation);
    $(review).append(explain);

    $(reviewDate).append(doc.data().reviewDate);
    $(review).prepend(reviewDate);
}