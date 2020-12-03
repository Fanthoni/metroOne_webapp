const form = document.querySelector('.form');


const addNewReservation = () => {
  
    const reservation = {
      date: form.date.value,
      time: form.time.value,
      groupSize: form.grp.value,  
      UID: localStorage.getItem("thisUserID"),      
    }

      db.collection('reservations').add(reservation)
      .then(() => {
      // Reset the form values
      form.date.value = "",
      form.time.value = "",
      form.grp.value = ""        
  
      alert('Your reservation has been successfully saved')
      });
  };

form.addEventListener('submit', e => {
    e.preventDefault()
    addNewReservation()
  });


