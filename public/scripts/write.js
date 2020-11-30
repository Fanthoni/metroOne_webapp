function writeStoreData() {
    db.collection("stores").doc("SCK").set({
      name: "Sports Chek",
      description: "Sport Chek is the largest Canadian retailer of sporting clothing and sports equipment, with 195 stores throughout Canada as of 2017.",
      rating_count: 0,
      rating_average: 0,
      store_hours: "11am - 7pm",
      
  
    });
    
  }
  writeStoreData();