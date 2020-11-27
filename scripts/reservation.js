const form = document.querySelector('.form')

const addNewReservation = () => {
  
    const reservation = {
      name: form.name.value,
      time: form.time.value,
<<<<<<< HEAD
      groupSize: form.grp.value
      
=======
      groupSize: form.grp.value,  
      UID: localStorage.getItem("thisUserID"),
>>>>>>> 62382d97615cb5d27729a5c8d37601048ba39188
    }
      db.collection('reservations').add(reservation)
      .then(() => {
      // Reset the form values
      form.name.value = "",
      form.time.value = "",
      form.grp.value = ""  
      
  
      alert('Your reservation has been successfully saved')
      });      
  };

form.addEventListener('submit', e => {
    e.preventDefault()
    addNewReservation()
  });


