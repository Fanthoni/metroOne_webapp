

function writeStoreData() {
    db.collection("stores").doc("SCK").set({
      username: "Sportcheck",
      description: "Its a really big store. Its a really big store. Its a really big store. Its a really big store. Its a really big store. Its a really big store.",
      rating_count: null,
      rating_average: null,
      store_hours: "11am - 7pm",

    });
  }

writeStoreData();

function readStoreData(){
    db.collection("stores").doc()
    .onSnapshot(function(snap){
        document.getElementById("#store-name").innerText = snap.data().message;
    })
}
readStoreData();